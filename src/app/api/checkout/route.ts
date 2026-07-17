import { NextResponse } from "next/server";
import { getArtist } from "@/lib/artists";
import { createBooking } from "@/lib/store";
import { getStripe, stripeConfigured } from "@/lib/stripe";
import { bookingFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bookingFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid form" },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const artist = getArtist(data.artistSlug);
    if (!artist) {
      return NextResponse.json({ error: "Artist not found" }, { status: 404 });
    }

    const booking = await createBooking({
      artistSlug: artist.slug,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      clientPhone: data.clientPhone,
      placement: data.placement,
      size: data.size,
      budget: data.budget,
      description: data.description,
      referenceUrls: data.referenceUrls ?? "",
      preferredDates: data.preferredDates,
      depositCents: artist.depositCents,
    });

    const origin = new URL(request.url).origin;
    const successUrl = `${origin}/booking/${booking.id}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/a/${artist.slug}?cancelled=1`;

    if (!stripeConfigured()) {
      // Demo mode: skip Stripe and mark deposit paid so you can test the flow.
      const { updateBooking } = await import("@/lib/store");
      await updateBooking(booking.id, { status: "deposit_paid" });
      return NextResponse.json({
        demo: true,
        bookingId: booking.id,
        url: `${origin}/booking/${booking.id}/waiver`,
      });
    }

    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 500 },
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: data.clientEmail,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: artist.depositCents,
            product_data: {
              name: `Deposit — ${artist.name}`,
              description: `Holds your appointment chair at ${artist.studio}. Applied to final tattoo cost.`,
            },
          },
        },
      ],
      metadata: {
        bookingId: booking.id,
        artistSlug: artist.slug,
      },
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    const { updateBooking } = await import("@/lib/store");
    await updateBooking(booking.id, { stripeSessionId: session.id });

    return NextResponse.json({ url: session.url, bookingId: booking.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Could not start booking" },
      { status: 500 },
    );
  }
}

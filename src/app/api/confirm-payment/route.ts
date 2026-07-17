import { NextResponse } from "next/server";
import { getStripe, stripeConfigured } from "@/lib/stripe";
import { getBooking, updateBooking } from "@/lib/store";

export async function POST(request: Request) {
  try {
    const { bookingId, sessionId } = (await request.json()) as {
      bookingId?: string;
      sessionId?: string;
    };

    if (!bookingId) {
      return NextResponse.json({ error: "Missing bookingId" }, { status: 400 });
    }

    const booking = await getBooking(bookingId);
    if (!booking) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (
      booking.status === "deposit_paid" ||
      booking.status === "waiver_signed" ||
      booking.status === "confirmed"
    ) {
      return NextResponse.json({ booking });
    }

    if (!stripeConfigured()) {
      const updated = await updateBooking(bookingId, { status: "deposit_paid" });
      return NextResponse.json({ booking: updated, demo: true });
    }

    if (!sessionId) {
      return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
    }

    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json({ error: "Stripe missing" }, { status: 500 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not completed" },
        { status: 402 },
      );
    }

    const updated = await updateBooking(bookingId, {
      status: "deposit_paid",
      stripeSessionId: sessionId,
    });

    return NextResponse.json({ booking: updated });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Confirm failed" }, { status: 500 });
  }
}

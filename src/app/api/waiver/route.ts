import { NextResponse } from "next/server";
import { z } from "zod";
import { getBooking, updateBooking } from "@/lib/store";

const schema = z.object({
  bookingId: z.string().min(1),
  signatureName: z.string().min(2, "Type your full legal name"),
  agreed: z.literal(true, {
    error: "You must agree to continue",
  }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid" },
        { status: 400 },
      );
    }

    const booking = await getBooking(parsed.data.bookingId);
    if (!booking) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (
      booking.status !== "deposit_paid" &&
      booking.status !== "waiver_signed" &&
      booking.status !== "confirmed"
    ) {
      return NextResponse.json(
        { error: "Deposit must be paid before signing the waiver" },
        { status: 400 },
      );
    }

    const updated = await updateBooking(booking.id, {
      status: "confirmed",
      waiverSignedAt: new Date().toISOString(),
      waiverSignatureName: parsed.data.signatureName,
    });

    return NextResponse.json({ booking: updated });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Could not save waiver" }, { status: 500 });
  }
}

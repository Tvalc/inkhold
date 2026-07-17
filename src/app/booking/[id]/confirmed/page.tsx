import Link from "next/link";
import { notFound } from "next/navigation";
import { getBooking } from "@/lib/store";
import { getArtist, formatMoney } from "@/lib/artists";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ConfirmedPage({ params }: Props) {
  const { id } = await params;
  const booking = await getBooking(id);
  if (!booking) notFound();

  const artist = getArtist(booking.artistSlug);
  if (!artist) notFound();

  return (
    <div className="page-shell">
      <p className="page-kicker">You&apos;re held</p>
      <h1 className="page-title">Booking confirmed</h1>
      <p className="page-sub">
        {booking.clientName} · {artist.name} at {artist.studio}
        <br />
        Deposit {formatMoney(booking.depositCents)} · Waiver signed
        {booking.waiverSignatureName
          ? ` by ${booking.waiverSignatureName}`
          : ""}
      </p>
      <div className="waiver-copy">
        <p>
          <strong>Piece:</strong> {booking.description}
        </p>
        <p>
          <strong>Placement / size:</strong> {booking.placement} ·{" "}
          {booking.size}
        </p>
        <p>
          <strong>Preferred dates:</strong> {booking.preferredDates}
        </p>
        <p className="muted">
          Artist gets this on their dashboard. SMS reminders come next in a
          later build.
        </p>
      </div>
      <p style={{ marginTop: "1.5rem" }}>
        <Link href={`/dashboard/${artist.slug}`} className="btn-primary">
          View artist dashboard
        </Link>
      </p>
    </div>
  );
}

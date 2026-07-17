import { notFound } from "next/navigation";
import { getBooking } from "@/lib/store";
import { getArtist } from "@/lib/artists";
import { WaiverForm } from "@/components/WaiverForm";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function WaiverPage({ params }: Props) {
  const { id } = await params;
  const booking = await getBooking(id);
  if (!booking) notFound();

  const artist = getArtist(booking.artistSlug);
  if (!artist) notFound();

  if (
    booking.status !== "deposit_paid" &&
    booking.status !== "waiver_signed" &&
    booking.status !== "confirmed"
  ) {
    return (
      <div className="page-shell">
        <h1 className="page-title">Deposit required</h1>
        <p className="page-sub">
          Pay the deposit first, then you&apos;ll land here to sign.
        </p>
      </div>
    );
  }

  if (booking.status === "confirmed" || booking.status === "waiver_signed") {
    return (
      <div className="page-shell">
        <h1 className="page-title">Already signed</h1>
        <p className="page-sub">
          This booking is locked in.{" "}
          <a href={`/booking/${booking.id}/confirmed`}>View confirmation</a>
        </p>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <p className="page-kicker">Step 2 of 2</p>
      <h1 className="page-title">Digital waiver</h1>
      <p className="page-sub">
        Deposit received for {artist.name}. Sign below to finish holding the
        chair.
      </p>
      <WaiverForm
        bookingId={booking.id}
        clientName={booking.clientName}
        artistName={artist.name}
      />
    </div>
  );
}

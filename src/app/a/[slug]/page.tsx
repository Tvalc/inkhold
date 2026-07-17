import { notFound } from "next/navigation";
import { getArtist, formatMoney } from "@/lib/artists";
import { BookingForm } from "@/components/BookingForm";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ cancelled?: string }>;
};

export default async function ArtistBookingPage({
  params,
  searchParams,
}: Props) {
  const { slug } = await params;
  const { cancelled } = await searchParams;
  const artist = getArtist(slug);
  if (!artist) notFound();

  return (
    <div className="page-shell">
      {cancelled ? (
        <div className="status-banner">
          Checkout cancelled — your slot isn&apos;t held until the deposit
          clears.
        </div>
      ) : null}
      <p className="page-kicker">
        {artist.neighborhood}, {artist.city}
      </p>
      <h1 className="page-title">{artist.name}</h1>
      <p className="page-sub">
        {artist.studio} · {artist.specialty}
        <br />
        {artist.bio}
        <br />
        <span className="muted">
          Rate ~{formatMoney(artist.hourlyRateCents)}/hr · Deposit{" "}
          {formatMoney(artist.depositCents)} · {artist.instagram}
        </span>
      </p>
      <BookingForm artist={artist} />
    </div>
  );
}

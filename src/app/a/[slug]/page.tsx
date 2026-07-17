import { notFound } from "next/navigation";
import Link from "next/link";
import { DEMO_ARTISTS, getArtist, formatMoney } from "@/lib/artists";
import { BookingForm } from "@/components/BookingForm";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ cancelled?: string }>;
};

export function generateStaticParams() {
  return DEMO_ARTISTS.map((a) => ({ slug: a.slug }));
}

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
      <div className="status-banner demo-banner">
        InkHold sales demo for <strong>{artist.studio}</strong> — not a live
        booking until they activate.
      </div>
      {cancelled ? (
        <div className="status-banner">
          Checkout cancelled — your slot isn&apos;t held until the deposit
          clears.
        </div>
      ) : null}
      <p className="page-kicker">
        {artist.neighborhood}, {artist.city} · {artist.instagram}
      </p>
      <h1 className="page-title">{artist.studio}</h1>
      <p className="page-sub">
        <strong>{artist.name}</strong> · {artist.specialty}
        <br />
        {artist.bio}
        <br />
        <span className="muted">
          Rate ~{formatMoney(artist.hourlyRateCents)}/hr · Deposit{" "}
          {formatMoney(artist.depositCents)} · Share{" "}
          <code>/a/{artist.slug}</code>
        </span>
      </p>
      <BookingForm artist={artist} />
      <p className="form-note" style={{ marginTop: "1.25rem" }}>
        Artist view:{" "}
        <Link href={`/dashboard/${artist.slug}`}>
          /dashboard/{artist.slug}
        </Link>
      </p>
    </div>
  );
}

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

  const themeClass = `theme-${artist.theme}`;

  return (
    <div className={`shop-theme ${themeClass}`}>
      <div className="page-shell">
        <div className="shop-hero-band">
          <p className="page-kicker">
            {artist.neighborhood}, {artist.city}
            {artist.pronouns ? ` · ${artist.pronouns}` : ""} ·{" "}
            {artist.instagram}
          </p>
          <h1 className="page-title">{artist.studio}</h1>
          <p className="headline">{artist.headline}</p>
          <div className="tag-row">
            {artist.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="status-banner demo-banner">
          <strong>InkHold sales demo</strong> for {artist.studio} —{" "}
          {artist.salesHook}
        </div>

        {cancelled ? (
          <div className="status-banner">
            Checkout cancelled — chair isn&apos;t held until the deposit
            clears.
          </div>
        ) : null}

        <div className="shop-meta-card">
          <p>
            <strong>
              {artist.name}
              {artist.pronouns ? ` (${artist.pronouns})` : ""}
            </strong>{" "}
            · {artist.specialty}
          </p>
          <p>{artist.bio}</p>
          <p>
            <strong>Find them:</strong> {artist.locationNote}
          </p>
          <p>
            <strong>Rate:</strong> ~{formatMoney(artist.hourlyRateCents)}/hr ·{" "}
            <strong>Deposit:</strong> {formatMoney(artist.depositCents)} ·{" "}
            <code>/a/{artist.slug}</code>
          </p>
        </div>

        <BookingForm artist={artist} />

        <p className="form-note" style={{ marginTop: "1.25rem" }}>
          Artist dashboard:{" "}
          <Link href={`/dashboard/${artist.slug}`}>
            /dashboard/{artist.slug}
          </Link>
        </p>
      </div>
    </div>
  );
}

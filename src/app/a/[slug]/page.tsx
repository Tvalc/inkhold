import { notFound } from "next/navigation";
import Link from "next/link";
import { DEMO_ARTISTS, getArtist, formatMoney } from "@/lib/artists";
import { BookingForm } from "@/components/BookingForm";
import { InkStage } from "@/components/InkStage";
import { imagesFor } from "@/lib/client-images";

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
  const hasInk = imagesFor(artist.slug).length > 0;

  return (
    <div className={`shop-theme shop-theme-stage ${themeClass}`}>
      <InkStage artist={artist}>
        <div className="ink-panel">
          <p className="ink-kicker">
            {artist.neighborhood} · {artist.instagram}
          </p>
          <h1 className="ink-studio">{artist.studio}</h1>
          <p className="ink-artist">
            {artist.name}
            {artist.pronouns ? ` (${artist.pronouns})` : ""} ·{" "}
            {artist.specialty}
          </p>
          <p className="ink-headline">{artist.headline}</p>

          <div className="ink-tags">
            {artist.tags.slice(0, 3).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <p className="ink-demo-note">
            InkHold demo · {formatMoney(artist.depositCents)} hold ·{" "}
            {artist.salesHook}
          </p>

          {cancelled ? (
            <div className="status-banner">Checkout cancelled — deposit not taken.</div>
          ) : null}

          {!hasInk ? (
            <p className="ink-no-photos">
              No site photos yet — form still works for the pitch.
            </p>
          ) : null}

          <BookingForm artist={artist} />

          <details className="ink-more">
            <summary>Studio notes</summary>
            <p>{artist.bio}</p>
            <p>{artist.locationNote}</p>
            <p>
              ~{formatMoney(artist.hourlyRateCents)}/hr ·{" "}
              <Link href={`/dashboard/${artist.slug}`}>Dashboard</Link>
            </p>
          </details>
        </div>
      </InkStage>
    </div>
  );
}

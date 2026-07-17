import { notFound } from "next/navigation";
import Link from "next/link";
import { DEMO_ARTISTS, getArtist, formatMoney } from "@/lib/artists";
import { BookingForm } from "@/components/BookingForm";
import { InkStage } from "@/components/InkStage";

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
    <div className={`shop-theme shop-theme-stage theme-${artist.theme}`}>
      <InkStage artist={artist}>
        <div className="book-panel">
          <p className="book-kicker">
            {artist.neighborhood}
            <span aria-hidden> · </span>
            {artist.instagram}
          </p>
          <h1 className="book-studio">{artist.studio}</h1>
          <p className="book-meta">
            {artist.name}
            {artist.pronouns ? ` · ${artist.pronouns}` : ""}
            <span className="book-dot" aria-hidden>
              ·
            </span>
            {artist.specialty}
          </p>
          <p className="book-line">{artist.headline}</p>

          {cancelled ? (
            <div className="status-banner">
              Checkout cancelled — deposit not taken.
            </div>
          ) : null}

          <BookingForm artist={artist} />

          <p className="book-demo">
            InkHold sales demo · {formatMoney(artist.depositCents)} hold
          </p>

          <details className="book-more">
            <summary>About the studio</summary>
            <p>{artist.bio}</p>
            <p>{artist.locationNote}</p>
            <p>
              ~{formatMoney(artist.hourlyRateCents)}/hr ·{" "}
              <Link href={`/dashboard/${artist.slug}`}>Artist dashboard</Link>
            </p>
          </details>
        </div>
      </InkStage>
    </div>
  );
}

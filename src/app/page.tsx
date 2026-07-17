import Image from "next/image";
import Link from "next/link";
import {
  DEMO_ARTISTS,
  artistsByNeighborhood,
  formatMoney,
} from "@/lib/artists";
import { imagesFor } from "@/lib/client-images";

export default function HomePage() {
  const groups = artistsByNeighborhood();

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-brand">
            Ink<span>Hold</span>
          </h1>
          <p className="hero-line">
            {DEMO_ARTISTS.length} Seattle demos with real portfolio photos
            pulled from each shop&apos;s public site — not just color swaps.
          </p>
          <div className="hero-cta">
            <Link href="#demo" className="btn-primary">
              Open the roster
            </Link>
            <Link href="/seattle" className="btn-ghost">
              Seattle launch plan
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="demo">
        <h2>Walk-in demos · with their work</h2>
        <p className="lede">
          Galleries are scraped from public studio sites for sales demos only.
          Credit links sit under each page.
        </p>

        {groups.map((group) => (
          <div key={group.neighborhood} className="hood-block">
            <h3 className="hood-title">{group.neighborhood}</h3>
            <div className="artist-list">
              {group.artists.map((artist) => {
                const thumb = imagesFor(artist.slug)[0];
                return (
                  <Link
                    key={artist.slug}
                    href={`/a/${artist.slug}`}
                    className="artist-link"
                  >
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt=""
                        width={480}
                        height={360}
                        className="home-thumb"
                        unoptimized
                      />
                    ) : null}
                    <h3>{artist.studio}</h3>
                    <p className="artist-meta">
                      {artist.name} · {formatMoney(artist.depositCents)} ·{" "}
                      <span className="slug-hint">/a/{artist.slug}</span>
                    </p>
                    <p className="home-card-hook">{artist.headline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

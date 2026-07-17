import Link from "next/link";
import {
  DEMO_ARTISTS,
  artistsByNeighborhood,
  formatMoney,
} from "@/lib/artists";

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
            {DEMO_ARTISTS.length} customized Seattle demos — each shop gets its
            own voice, theme, deposit policy, and intake questions.
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
        <h2>Walk-in demos · not clones</h2>
        <p className="lede">
          Every page below has unique copy, colors, CTAs, and shop-specific
          form fields pulled from real studio details. Flip between Alleged and
          Anchor — they should not feel like the same template.
        </p>

        {groups.map((group) => (
          <div key={group.neighborhood} className="hood-block">
            <h3 className="hood-title">{group.neighborhood}</h3>
            <div className="artist-list">
              {group.artists.map((artist) => (
                <Link
                  key={artist.slug}
                  href={`/a/${artist.slug}`}
                  className="artist-link"
                >
                  <h3>{artist.studio}</h3>
                  <p className="artist-meta">
                    {artist.name} · {formatMoney(artist.depositCents)} ·{" "}
                    <span className="slug-hint">/a/{artist.slug}</span>
                  </p>
                  <p className="home-card-hook">{artist.headline}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

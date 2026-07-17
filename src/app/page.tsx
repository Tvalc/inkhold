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
            One link in your Instagram bio. Client fills intake, pays the
            deposit, signs the waiver. Your chair stays filled.
          </p>
          <div className="hero-cta">
            <Link href="#demo" className="btn-primary">
              {DEMO_ARTISTS.length} Seattle demo pages
            </Link>
            <Link href="/seattle" className="btn-ghost">
              Seattle launch plan
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="demo">
        <h2>Every outreach target · live demo</h2>
        <p className="lede">
          Open the shop&apos;s page on your phone when you walk in. Demo mode
          skips Stripe — deposit marks paid and jumps to the waiver. Not
          affiliated until they sign up.
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
                    {artist.name} · {formatMoney(artist.depositCents)} deposit
                    <br />
                    <span className="slug-hint">/a/{artist.slug}</span>
                  </p>
                  <p>{artist.specialty}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

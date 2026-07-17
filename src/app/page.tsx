import Link from "next/link";
import { DEMO_ARTISTS, formatMoney } from "@/lib/artists";

export default function HomePage() {
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
            <Link href="/a/maya-rivera" className="btn-primary">
              Try a demo booking
            </Link>
            <Link href="/seattle" className="btn-ghost">
              Seattle launch plan
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="demo">
        <h2>Demo artists · Seattle</h2>
        <p className="lede">
          Fake profiles so you can walk the full flow today. No Stripe keys
          needed — demo mode marks the deposit paid and sends you to the
          waiver.
        </p>
        <div className="artist-list">
          {DEMO_ARTISTS.map((artist) => (
            <Link
              key={artist.slug}
              href={`/a/${artist.slug}`}
              className="artist-link"
            >
              <h3>{artist.name}</h3>
              <p className="artist-meta">
                {artist.studio} · {artist.neighborhood} ·{" "}
                {formatMoney(artist.depositCents)} deposit
              </p>
              <p>{artist.specialty}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

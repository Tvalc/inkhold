import Link from "next/link";
import { DEMO_ARTISTS, artistsByNeighborhood } from "@/lib/artists";

export default function SeattlePlanPage() {
  const groups = artistsByNeighborhood();

  return (
    <div className="page-shell wide">
      <p className="page-kicker">Go-to-market</p>
      <h1 className="page-title">Seattle launch plan</h1>
      <p className="page-sub">
        {DEMO_ARTISTS.length} customized demos — unique theme, headline,
        deposit policy, and intake questions per shop. Open the right URL on
        your phone when you walk in.
      </p>

      <div className="plan-block">
        <h3>Offer</h3>
        <ul>
          <li>
            <strong>$29/mo</strong> solo · <strong>$79/mo</strong> shop ≤5
          </li>
          <li>First 10 Seattle artists free 60 days, then $19/mo year one</li>
          <li>No per-booking tax on deposits in the founding pitch</li>
        </ul>
      </div>

      <div className="plan-block">
        <h3>Live customized pages</h3>
        {groups.map((group) => (
          <div key={group.neighborhood} style={{ marginBottom: "1.5rem" }}>
            <h4
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "1.15rem",
                fontWeight: 400,
                margin: "0 0 0.75rem",
              }}
            >
              {group.neighborhood}
            </h4>
            <div className="target-grid">
              {group.artists.map((a) => (
                <div className="target-item" key={a.slug}>
                  <strong>
                    <Link href={`/a/${a.slug}`}>{a.studio}</Link>
                  </strong>
                  <span>
                    {a.theme} · /a/{a.slug}
                  </span>
                  <p>
                    <em>{a.headline}</em>
                    <br />
                    {a.salesHook}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="plan-block">
        <h3>30-second script</h3>
        <ul>
          <li>
            “I already mocked your booking page — deposit and waiver before
            they text you.”
          </li>
          <li>
            “Founding Seattle artists get 60 days free. I’m not replacing your
            shop software.”
          </li>
        </ul>
      </div>

      <p>
        <Link href="/#demo" className="btn-primary">
          All demos on home
        </Link>
      </p>
    </div>
  );
}

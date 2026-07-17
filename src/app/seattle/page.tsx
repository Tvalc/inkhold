import Link from "next/link";
import { DEMO_ARTISTS, artistsByNeighborhood } from "@/lib/artists";

const PITCH: Record<string, string> = {
  "alleged-arts":
    "Appointment-only contemporary — perfect bio-link wedge. Start with resident artists, not the whole OS.",
  "sorry-sorry":
    "Locked small studio — digital intake + deposit cuts door chaos.",
  "elevation-project":
    "Indie founder energy. Pitch a gallery-matched booking link.",
  "facet-and-form":
    "Hospitality-grade deposit + waiver for a luxury atelier.",
  "true-love":
    "Sell individual artists who still DM-book — not a desk rip-replace.",
  "dark-age": "Custom appointment deposits; leave flash walk-ins alone.",
  supergenius: "Roster artists who want a bio link without shop software drama.",
  "laughing-buddha": "Busy floor — one artist Venmo chase is enough of a yes.",
  "seattle-tattoo-emporium": "Custom projects that need a real deposit before stencil day.",
  "hurricane-violet": "Solo speed — white-glove first link setup on their phone.",
  "wren-cavanaugh": "Independent IG operator — fastest close path.",
  "central-district-studio": "Appointment-only CD energy; ask for guest-artist intros.",
  "hidden-hand": "Lead with custom appointment deposits, not Friday flash.",
  "crow-and-pitcher": "Private Fremont studio — quiet appointment days.",
  "slave-to-the-needle": "Ask who still collects deposits on Venmo.",
  "anchor-tattoo": "Two-artist shop — deposits without enterprise software.",
  "rabid-hands": "Appointment holds; walk-ins stay separate.",
  "maya-rivera": "Generic product demo for cold pitches.",
  "jordan-lee": "Generic Ballard product demo.",
  "sam-okada": "Generic Fremont private-studio demo.",
};

export default function SeattlePlanPage() {
  const groups = artistsByNeighborhood();

  return (
    <div className="page-shell wide">
      <p className="page-kicker">Go-to-market</p>
      <h1 className="page-title">Seattle launch plan</h1>
      <p className="page-sub">
        {DEMO_ARTISTS.length} live demo pages — open the shop&apos;s URL on
        your phone when you walk in. Wedge: solo / private artists still chasing
        Venmo deposits.
      </p>

      <div className="plan-block">
        <h3>Offer</h3>
        <ul>
          <li>
            <strong>$29/mo</strong> solo · <strong>$79/mo</strong> shop ≤5
            artists
          </li>
          <li>
            Founding: first 10 Seattle artists free 60 days, then $19/mo year
            one
          </li>
          <li>No per-booking tax on deposits in the founding pitch</li>
        </ul>
      </div>

      <div className="plan-block">
        <h3>Month-1 targets</h3>
        <ul>
          <li>Conservative ~$95 MRR · Base ~$350 · Stretch ~$740</li>
          <li>Day-30 cash if you walk shops: $200–600</li>
        </ul>
      </div>

      <div className="plan-block">
        <h3>Live demo pages (tap to open)</h3>
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
                    {a.name} · /a/{a.slug}
                  </span>
                  <p>{PITCH[a.slug] ?? a.bio}</p>
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
            “I built a bio link that takes the deposit and waiver before they
            ever text you.”
          </li>
          <li>
            “Here’s yours already live — 90 seconds on your phone. Founding
            Seattle artists get 60 days free.”
          </li>
          <li>
            “I’m not replacing your shop software. Just the Venmo chase.”
          </li>
        </ul>
      </div>

      <p>
        <Link href="/#demo" className="btn-primary">
          All {DEMO_ARTISTS.length} demos on home
        </Link>
      </p>
    </div>
  );
}

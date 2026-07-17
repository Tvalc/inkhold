import Link from "next/link";

export default function SeattlePlanPage() {
  return (
    <div className="page-shell wide">
      <p className="page-kicker">Go-to-market</p>
      <h1 className="page-title">Seattle launch plan</h1>
      <p className="page-sub">
        30-day path to first paying artists. Wedge: solo / private-studio
        artists who still chase deposits over Venmo + Instagram DMs. Full
        numbers and outreach list also live in the InkHold Seattle canvas
        beside chat.
      </p>

      <div className="plan-block">
        <h3>Offer</h3>
        <ul>
          <li>
            <strong>$29/mo</strong> solo artist — unlimited booking links,
            Stripe deposits, digital waiver, basic dashboard
          </li>
          <li>
            <strong>$79/mo</strong> small shop (up to 5 artists) — shared
            studio page later
          </li>
          <li>
            Founding Seattle deal: <strong>first 10 artists free for 60
            days</strong>, then $19/mo locked for year one
          </li>
          <li>
            Positioning: no per-booking tax on deposits (unlike some studio
            OS tools) — you keep deposit economics clean
          </li>
        </ul>
      </div>

      <div className="plan-block">
        <h3>Month-1 revenue targets</h3>
        <ul>
          <li>
            Conservative: 5 founding artists converting after trial → ~$95 MRR
          </li>
          <li>Base: 12 solo at $29 → ~$350 MRR</li>
          <li>Stretch: 20 solo + 2 shops → ~$740 MRR</li>
          <li>
            Realistic cash in door by day 30 if you walk shops: $200–600
            (founding + early paid)
          </li>
        </ul>
      </div>

      <div className="plan-block">
        <h3>Weekly cadence</h3>
        <ol>
          <li>
            <strong>Week 1:</strong> Ship demo link, Stripe test keys, 1-page
            leave-behind PDF. Visit 8 Capitol Hill / Central studios in person.
          </li>
          <li>
            <strong>Week 2:</strong> Ballard + Fremont walk. DM 40 Instagram
            artists with “saw your booking highlight — 2-min deposit link”
            note. Goal: 3 live founding users.
          </li>
          <li>
            <strong>Week 3:</strong> Collect no-show stories, tighten waiver
            copy with one shop’s real policy. Ask for intros to guest artists.
          </li>
          <li>
            <strong>Week 4:</strong> Convert founding → paid. Post 2 local
            case-study IG carousels. Book coffee with one shop manager who
            hates their current software.
          </li>
        </ol>
      </div>

      <div className="plan-block">
        <h3>Priority outreach (appointment / private first)</h3>
        <div className="target-grid">
          <div className="target-item">
            <strong>Alleged Arts</strong>
            <span>Capitol Hill · Private · Queer-owned</span>
            <p>
              Appointment-only contemporary — perfect bio-link wedge. Start
              with resident artists, not “sell the whole OS.”
            </p>
          </div>
          <div className="target-item">
            <strong>Sorry Sorry Tattoo</strong>
            <span>Capitol Hill · Locked studio</span>
            <p>
              Small room, overlapping conversations — digital intake + deposit
              cuts front-door chaos.
            </p>
          </div>
          <div className="target-item">
            <strong>Elevation Project</strong>
            <span>Capitol Hill · Private + gallery</span>
            <p>
              Independent founder energy. Pitch as “your own booking link that
              matches the gallery vibe.”
            </p>
          </div>
          <div className="target-item">
            <strong>Facet and Form</strong>
            <span>Capitol Hill · Tattoo + piercing atelier</span>
            <p>
              High-touch luxury — deposits + waivers fit their hospitality
              story. Ask for artist intros.
            </p>
          </div>
          <div className="target-item">
            <strong>True Love Tattoo</strong>
            <span>Capitol Hill · LGBTQIA-centric</span>
            <p>
              Established shop — sell individual artists who still DM-book, not
              a full rip-replace of their desk.
            </p>
          </div>
          <div className="target-item">
            <strong>Hurricane Violet / Wren Cavanaugh</strong>
            <span>Independent · IG-forward</span>
            <p>
              Solo operators = fastest yes. Offer white-glove setup of their
              first link in person.
            </p>
          </div>
          <div className="target-item">
            <strong>Hidden Hand / Crow & Pitcher</strong>
            <span>Fremont</span>
            <p>
              Mix of walk-in and private. Lead with custom-appointment
              deposits, not flash walk-ins.
            </p>
          </div>
          <div className="target-item">
            <strong>Slave to the Needle / Anchor / Rabid Hands</strong>
            <span>Ballard</span>
            <p>
              Walk shops Tue–Thu afternoon. Ask “who still collects deposits on
              Venmo?” — that’s your buyer.
            </p>
          </div>
        </div>
      </div>

      <div className="plan-block">
        <h3>In-person script (30 seconds)</h3>
        <ul>
          <li>
            “I built a bio link that takes the deposit and waiver before they
            ever text you.”
          </li>
          <li>
            “Demo is live — take 90 seconds on your phone. Founding Seattle
            artists get 60 days free.”
          </li>
          <li>
            “I’m not replacing your whole shop software. Just the Venmo chase.”
          </li>
        </ul>
      </div>

      <p>
        <Link href="/a/maya-rivera" className="btn-primary">
          Open demo booking
        </Link>
      </p>
    </div>
  );
}

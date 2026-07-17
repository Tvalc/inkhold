import type { Artist } from "./types";

/**
 * One bookable demo page per Seattle outreach target.
 * Profiles are sales demos — not affiliated with the real shops until they sign up.
 */
export const DEMO_ARTISTS: Artist[] = [
  // —— Capitol Hill · priority ——
  {
    slug: "alleged-arts",
    name: "Lisa Orth",
    studio: "Alleged Arts",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Private appointment-only contemporary tattoo. This InkHold demo link takes intake, deposit, and waiver before the DM thread starts.",
    specialty: "Contemporary · Fine art tattoo",
    depositCents: 15000,
    hourlyRateCents: 25000,
    instagram: "@allegedarts",
    email: "demo@inkhold.app",
  },
  {
    slug: "sorry-sorry",
    name: "Sorry Sorry Desk",
    studio: "Sorry Sorry Tattoo",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Locked Capitol Hill studio — wave at the window. Demo booking holds the chair with a deposit so walk-up chaos stays outside.",
    specialty: "Custom · Illustrative",
    depositCents: 10000,
    hourlyRateCents: 20000,
    instagram: "@sorrysorrytattoo",
    email: "demo@inkhold.app",
  },
  {
    slug: "elevation-project",
    name: "Emma Larkin",
    studio: "Elevation Project",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Private studio + gallery loft. Demo page for appointment requests with deposit held before the calendar locks.",
    specialty: "Collage · Watercolor · Realism",
    depositCents: 12500,
    hourlyRateCents: 22000,
    instagram: "@elevation_project",
    email: "demo@inkhold.app",
  },
  {
    slug: "facet-and-form",
    name: "Facet & Form Tattoo",
    studio: "Facet and Form",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Luxury atelier — tattoo and piercing with hospitality energy. Demo deposit + waiver flow matched to a high-touch front of house.",
    specialty: "Fine line · Curated custom",
    depositCents: 20000,
    hourlyRateCents: 28000,
    instagram: "@facetandform",
    email: "demo@inkhold.app",
  },
  {
    slug: "true-love",
    name: "True Love Artist",
    studio: "True Love Tattoo",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Longest-running LGBTQIA-centric shop on the Hill. Demo for artists who still book deposits over email and Instagram.",
    specialty: "Traditional · Custom · Flash",
    depositCents: 10000,
    hourlyRateCents: 18000,
    instagram: "@truelovetattoo",
    email: "demo@inkhold.app",
  },
  {
    slug: "dark-age",
    name: "Dark Age Artist",
    studio: "Dark Age Tattoo",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Classic Cap Hill shop energy. Demo link for custom appointments — walk-ins stay walk-ins; deposits hold the booked chair.",
    specialty: "Traditional · Blackwork · Custom",
    depositCents: 10000,
    hourlyRateCents: 17500,
    instagram: "@darkagetattoo",
    email: "demo@inkhold.app",
  },
  {
    slug: "supergenius",
    name: "Supergenius Artist",
    studio: "Supergenius Tattoo",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Established Cap Hill roster. Demo for individual artists who want a bio link without ripping out the shop desk system.",
    specialty: "Illustrative · Neo-trad · Custom",
    depositCents: 12500,
    hourlyRateCents: 20000,
    instagram: "@supergeniustattoo",
    email: "demo@inkhold.app",
  },
  {
    slug: "laughing-buddha",
    name: "Laughing Buddha Artist",
    studio: "Laughing Buddha Tattoo",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Busy shop floor. Demo shows how a single artist can collect deposits without Venmo screenshots in the group chat.",
    specialty: "American traditional · Japanese · Custom",
    depositCents: 10000,
    hourlyRateCents: 18000,
    instagram: "@laughingbuddhatattoo",
    email: "demo@inkhold.app",
  },
  {
    slug: "seattle-tattoo-emporium",
    name: "Emporium Artist",
    studio: "Seattle Tattoo Emporium",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "High-volume Cap Hill stop. Demo booking page for custom projects that need a real deposit before stencil day.",
    specialty: "Flash · Custom · Cover-ups",
    depositCents: 7500,
    hourlyRateCents: 15000,
    instagram: "@seattletattooemporium",
    email: "demo@inkhold.app",
  },

  // —— Independents · highest close speed ——
  {
    slug: "hurricane-violet",
    name: "Hurricane Violet",
    studio: "Private / Independent",
    neighborhood: "Seattle",
    city: "Seattle",
    bio: "Independent IG-forward operator. Demo of the exact wedge: one bio link, deposit paid, waiver signed, chair held.",
    specialty: "Custom · Personal style",
    depositCents: 15000,
    hourlyRateCents: 22000,
    instagram: "@hurricaneviolet",
    email: "demo@inkhold.app",
  },
  {
    slug: "wren-cavanaugh",
    name: "Wren Cavanaugh",
    studio: "Private / Independent",
    neighborhood: "Seattle",
    city: "Seattle",
    bio: "Solo artist demo — white-glove setup in under two minutes. Deposit first, then the calendar conversation.",
    specialty: "Fine line · Illustrative",
    depositCents: 12500,
    hourlyRateCents: 20000,
    instagram: "@wrencavanaugh",
    email: "demo@inkhold.app",
  },

  // —— Central District ——
  {
    slug: "central-district-studio",
    name: "CD Studio Artist",
    studio: "Queer-owned Central Studio",
    neighborhood: "Central District",
    city: "Seattle",
    bio: "Appointment-only Central District shop energy. Demo for artists who prefer DMs today and a cleaner deposit flow tomorrow.",
    specialty: "Illustrative · Ornamental · Guest artists",
    depositCents: 10000,
    hourlyRateCents: 19000,
    instagram: "@seattleinkhold",
    email: "demo@inkhold.app",
  },

  // —— Fremont ——
  {
    slug: "hidden-hand",
    name: "Hidden Hand Artist",
    studio: "Hidden Hand Tattoo",
    neighborhood: "Fremont",
    city: "Seattle",
    bio: "Fremont shop with flash + customs. Demo focuses on custom appointment deposits — not Friday the 13th walk-ins.",
    specialty: "Flash · Traditional · Custom",
    depositCents: 10000,
    hourlyRateCents: 17500,
    instagram: "@hiddenhandtattoo",
    email: "demo@inkhold.app",
  },
  {
    slug: "crow-and-pitcher",
    name: "Crow & Pitcher",
    studio: "Crow and Pitcher",
    neighborhood: "Fremont",
    city: "Seattle",
    bio: "Private Fremont studio vibe. Demo intake + deposit for quiet appointment days.",
    specialty: "Blackwork · Illustrative · Private studio",
    depositCents: 15000,
    hourlyRateCents: 23000,
    instagram: "@crowandpitcher",
    email: "demo@inkhold.app",
  },

  // —— Ballard ——
  {
    slug: "slave-to-the-needle",
    name: "Slave to the Needle Artist",
    studio: "Slave to the Needle",
    neighborhood: "Ballard",
    city: "Seattle",
    bio: "Ballard institution. Demo pitch: which artist still collects deposits on Venmo? That’s who gets this link.",
    specialty: "Traditional · Black & grey · Custom",
    depositCents: 10000,
    hourlyRateCents: 18000,
    instagram: "@slavetotheneedle",
    email: "demo@inkhold.app",
  },
  {
    slug: "anchor-tattoo",
    name: "Anchor Tattoo Artist",
    studio: "Anchor Tattoo",
    neighborhood: "Ballard",
    city: "Seattle",
    bio: "Small Ballard roster. Demo page sized for a two-artist shop that wants deposits without enterprise software.",
    specialty: "Traditional · Nautical · Custom",
    depositCents: 10000,
    hourlyRateCents: 17000,
    instagram: "@anchortattooseattle",
    email: "demo@inkhold.app",
  },
  {
    slug: "rabid-hands",
    name: "Rabid Hands Artist",
    studio: "Rabid Hands Tattoo Studio",
    neighborhood: "Ballard",
    city: "Seattle",
    bio: "Ballard traditional-to-illustrative shop. Demo for appointment holds; walk-ins when an artist is free stay separate.",
    specialty: "Traditional · Illustrative",
    depositCents: 10000,
    hourlyRateCents: 18000,
    instagram: "@rabidhands",
    email: "demo@inkhold.app",
  },

  // —— Original product demos (keep for generic pitch) ——
  {
    slug: "maya-rivera",
    name: "Maya Rivera",
    studio: "Blackpine Studio",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Fine-line botanicals and blackwork. Private appointments only. Generic product demo — deposit holds your chair.",
    specialty: "Fine-line · Botanicals · Blackwork",
    depositCents: 10000,
    hourlyRateCents: 20000,
    instagram: "@mayariveraink",
    email: "demo@inkhold.app",
  },
  {
    slug: "jordan-lee",
    name: "Jordan Lee",
    studio: "Needle & North",
    neighborhood: "Ballard",
    city: "Seattle",
    bio: "Neo-trad color and illustrative animals. Booked out weeks ahead — deposits keep the calendar honest.",
    specialty: "Neo-traditional · Color",
    depositCents: 15000,
    hourlyRateCents: 22000,
    instagram: "@jordanleetattoo",
    email: "demo@inkhold.app",
  },
  {
    slug: "sam-okada",
    name: "Sam Okada",
    studio: "Okada Private",
    neighborhood: "Fremont",
    city: "Seattle",
    bio: "Japanese-inspired and geometric work in a quiet private studio. Intake + deposit + waiver in one link.",
    specialty: "Japanese · Geometric",
    depositCents: 12500,
    hourlyRateCents: 25000,
    instagram: "@samokada.ink",
    email: "demo@inkhold.app",
  },
];

export const NEIGHBORHOOD_ORDER = [
  "Capitol Hill",
  "Seattle",
  "Central District",
  "Fremont",
  "Ballard",
] as const;

export function getArtist(slug: string): Artist | undefined {
  return DEMO_ARTISTS.find((a) => a.slug === slug);
}

export function artistsByNeighborhood(): {
  neighborhood: string;
  artists: Artist[];
}[] {
  const map = new Map<string, Artist[]>();
  for (const artist of DEMO_ARTISTS) {
    const list = map.get(artist.neighborhood) ?? [];
    list.push(artist);
    map.set(artist.neighborhood, list);
  }
  const ordered: { neighborhood: string; artists: Artist[] }[] = [];
  for (const n of NEIGHBORHOOD_ORDER) {
    const artists = map.get(n);
    if (artists) ordered.push({ neighborhood: n, artists });
  }
  for (const [neighborhood, artists] of map) {
    if (!(NEIGHBORHOOD_ORDER as readonly string[]).includes(neighborhood)) {
      ordered.push({ neighborhood, artists });
    }
  }
  return ordered;
}

export function formatMoney(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

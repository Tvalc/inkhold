import type { Artist } from "./types";

export const DEMO_ARTISTS: Artist[] = [
  {
    slug: "maya-rivera",
    name: "Maya Rivera",
    studio: "Blackpine Studio",
    neighborhood: "Capitol Hill",
    city: "Seattle",
    bio: "Fine-line botanicals and blackwork. Private appointments only. Deposit holds your chair — no more Venmo chase.",
    specialty: "Fine-line · Botanicals · Blackwork",
    depositCents: 10000,
    hourlyRateCents: 20000,
    instagram: "@mayariveraink",
    email: "maya@example.com",
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
    email: "jordan@example.com",
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
    email: "sam@example.com",
  },
];

export function getArtist(slug: string): Artist | undefined {
  return DEMO_ARTISTS.find((a) => a.slug === slug);
}

export function formatMoney(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

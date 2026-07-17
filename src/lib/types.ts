export type BookingStatus =
  | "pending_deposit"
  | "deposit_paid"
  | "waiver_signed"
  | "confirmed"
  | "cancelled";

/** Visual shell for each shop demo page */
export type ShopTheme =
  | "loft-calm"
  | "neon-window"
  | "gallery-bright"
  | "atelier-moody"
  | "queer-warm"
  | "classic-shop"
  | "indie-ink"
  | "fremont-flash"
  | "private-quiet"
  | "ballard-trad"
  | "harbor-small"
  | "product-default";

export type Artist = {
  slug: string;
  name: string;
  pronouns?: string;
  studio: string;
  neighborhood: string;
  city: string;
  /** One-line hero under the studio name */
  headline: string;
  /** Longer story — unique voice per shop */
  bio: string;
  specialty: string;
  /** Short tags shown as a row */
  tags: string[];
  depositCents: number;
  hourlyRateCents: number;
  /** Min session / project note */
  sessionNote: string;
  depositPolicy: string;
  instagram: string;
  email: string;
  theme: ShopTheme;
  /** Landmark / how to find them */
  locationNote: string;
  /** Form field customization */
  form: {
    placementPlaceholder: string;
    descriptionPlaceholder: string;
    datesPlaceholder: string;
    ctaLabel: string;
  };
  /** Extra intake question unique to this shop */
  extraQuestion?: {
    name: string;
    label: string;
    placeholder: string;
  };
  /** Why this demo exists for the sales walk */
  salesHook: string;
};

export type Booking = {
  id: string;
  artistSlug: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  placement: string;
  size: string;
  budget: string;
  description: string;
  referenceUrls: string;
  preferredDates: string;
  status: BookingStatus;
  depositCents: number;
  stripeSessionId?: string;
  waiverSignedAt?: string;
  waiverSignatureName?: string;
  createdAt: string;
};

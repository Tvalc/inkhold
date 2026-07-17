export type BookingStatus =
  | "pending_deposit"
  | "deposit_paid"
  | "waiver_signed"
  | "confirmed"
  | "cancelled";

export type Artist = {
  slug: string;
  name: string;
  studio: string;
  neighborhood: string;
  city: string;
  bio: string;
  specialty: string;
  depositCents: number;
  hourlyRateCents: number;
  instagram: string;
  email: string;
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

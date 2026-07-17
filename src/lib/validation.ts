import { z } from "zod";

export const bookingFormSchema = z.object({
  artistSlug: z.string().min(1),
  clientName: z.string().min(2, "Name is required"),
  clientEmail: z.string().email("Valid email required"),
  clientPhone: z.string().min(7, "Phone is required"),
  placement: z.string().min(2, "Placement is required"),
  size: z.string().min(1, "Size is required"),
  budget: z.string().min(1, "Budget range is required"),
  description: z.string().min(10, "Tell us a bit more about the piece"),
  referenceUrls: z.string().optional().default(""),
  preferredDates: z.string().min(3, "Preferred dates help us schedule"),
});

export type BookingFormInput = z.infer<typeof bookingFormSchema>;

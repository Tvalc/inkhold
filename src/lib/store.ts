import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import type { Booking } from "./types";

/**
 * Local: JSON file under .data/
 * Vercel / serverless: in-memory (fine for live demos; resets on cold starts)
 */
const useMemory = Boolean(process.env.VERCEL) || process.env.INKHOLD_MEMORY === "1";

const DATA_DIR = path.join(process.cwd(), ".data");
const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");

type GlobalBookings = typeof globalThis & { __inkholdBookings?: Booking[] };

function memoryBookings(): Booking[] {
  const g = globalThis as GlobalBookings;
  if (!g.__inkholdBookings) g.__inkholdBookings = [];
  return g.__inkholdBookings;
}

async function ensureStore() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(BOOKINGS_FILE);
  } catch {
    await fs.writeFile(BOOKINGS_FILE, "[]", "utf8");
  }
}

async function readAll(): Promise<Booking[]> {
  if (useMemory) return memoryBookings();
  await ensureStore();
  const raw = await fs.readFile(BOOKINGS_FILE, "utf8");
  return JSON.parse(raw) as Booking[];
}

async function writeAll(bookings: Booking[]) {
  if (useMemory) {
    (globalThis as GlobalBookings).__inkholdBookings = bookings;
    return;
  }
  await ensureStore();
  await fs.writeFile(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf8");
}

export async function createBooking(
  input: Omit<Booking, "id" | "status" | "createdAt">,
): Promise<Booking> {
  const bookings = await readAll();
  const booking: Booking = {
    ...input,
    id: randomUUID(),
    status: "pending_deposit",
    createdAt: new Date().toISOString(),
  };
  bookings.unshift(booking);
  await writeAll(bookings);
  return booking;
}

export async function getBooking(id: string): Promise<Booking | undefined> {
  const bookings = await readAll();
  return bookings.find((b) => b.id === id);
}

export async function updateBooking(
  id: string,
  patch: Partial<Booking>,
): Promise<Booking | undefined> {
  const bookings = await readAll();
  const idx = bookings.findIndex((b) => b.id === id);
  if (idx === -1) return undefined;
  bookings[idx] = { ...bookings[idx], ...patch };
  await writeAll(bookings);
  return bookings[idx];
}

export async function listBookingsByArtist(
  artistSlug: string,
): Promise<Booking[]> {
  const bookings = await readAll();
  return bookings.filter((b) => b.artistSlug === artistSlug);
}

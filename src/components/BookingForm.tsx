"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Artist } from "@/lib/types";
import { formatMoney } from "@/lib/artists";

type Props = {
  artist: Artist;
};

export function BookingForm({ artist }: Props) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      artistSlug: artist.slug,
      clientName: String(form.get("clientName") ?? ""),
      clientEmail: String(form.get("clientEmail") ?? ""),
      clientPhone: String(form.get("clientPhone") ?? ""),
      placement: String(form.get("placement") ?? ""),
      size: String(form.get("size") ?? ""),
      budget: String(form.get("budget") ?? ""),
      description: String(form.get("description") ?? ""),
      referenceUrls: String(form.get("referenceUrls") ?? ""),
      preferredDates: String(form.get("preferredDates") ?? ""),
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        url?: string;
        error?: string;
        demo?: boolean;
        bookingId?: string;
      };

      if (!res.ok || !data.url) {
        setError(data.error ?? "Something went wrong");
        setLoading(false);
        return;
      }

      if (data.demo) {
        router.push(data.url);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Network error — try again");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="booking-form">
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input name="clientName" required autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input
            name="clientEmail"
            type="email"
            required
            autoComplete="email"
          />
        </label>
        <label>
          <span>Phone</span>
          <input
            name="clientPhone"
            type="tel"
            required
            autoComplete="tel"
          />
        </label>
        <label>
          <span>Placement</span>
          <input
            name="placement"
            required
            placeholder="e.g. outer forearm"
          />
        </label>
        <label>
          <span>Approx. size</span>
          <select name="size" required defaultValue="">
            <option value="" disabled>
              Select size
            </option>
            <option value="small">Small (under 3&quot;)</option>
            <option value="medium">Medium (3–6&quot;)</option>
            <option value="large">Large (6&quot;+)</option>
            <option value="sleeve">Half / full sleeve project</option>
          </select>
        </label>
        <label>
          <span>Budget range</span>
          <select name="budget" required defaultValue="">
            <option value="" disabled>
              Select range
            </option>
            <option value="under-300">Under $300</option>
            <option value="300-600">$300–600</option>
            <option value="600-1200">$600–1,200</option>
            <option value="1200-plus">$1,200+</option>
          </select>
        </label>
      </div>

      <label className="full">
        <span>Describe the piece</span>
        <textarea
          name="description"
          required
          rows={4}
          placeholder="Style, subject, color vs blackwork, anything I should know…"
        />
      </label>

      <label className="full">
        <span>Reference links (optional)</span>
        <input
          name="referenceUrls"
          placeholder="Instagram / Pinterest / Drive links"
        />
      </label>

      <label className="full">
        <span>Preferred dates / windows</span>
        <input
          name="preferredDates"
          required
          placeholder="e.g. weekday evenings in August"
        />
      </label>

      {error ? <p className="form-error">{error}</p> : null}

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading
          ? "Starting checkout…"
          : `Pay ${formatMoney(artist.depositCents)} deposit to hold`}
      </button>
      <p className="form-note">
        Deposit applies to your tattoo. No-shows forfeit the deposit per
        studio policy.
      </p>
    </form>
  );
}

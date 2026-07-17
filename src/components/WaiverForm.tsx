"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  bookingId: string;
  clientName: string;
  artistName: string;
};

export function WaiverForm({ bookingId, clientName, artistName }: Props) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const signatureName = String(form.get("signatureName") ?? "");
    const agreed = form.get("agreed") === "on";

    try {
      const res = await fetch("/api/waiver", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId,
          signatureName,
          agreed: agreed ? true : false,
        }),
      });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(data.error ?? "Could not save waiver");
        setLoading(false);
        return;
      }

      router.push(`/booking/${bookingId}/confirmed`);
    } catch {
      setError("Network error — try again");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="booking-form waiver-form">
      <div className="waiver-copy">
        <p>
          I, acknowledging I am 18+ (or accompanied by a legal guardian where
          required), consent to receive tattoo services from{" "}
          <strong>{artistName}</strong>. I understand tattooing involves
          needles, ink, and risk of infection, allergic reaction, scarring, or
          dissatisfaction with the final result.
        </p>
        <p>
          I confirm I am not under the influence of alcohol or mind-altering
          substances. I have disclosed relevant medical conditions. I agree to
          follow aftercare instructions. I understand the deposit is
          non-refundable if I no-show or cancel outside studio policy.
        </p>
        <p>
          This is a demo waiver for InkHold — replace with counsel-reviewed
          language before production use.
        </p>
      </div>

      <label className="check-row">
        <input type="checkbox" name="agreed" required />
        <span>I have read and agree to the terms above</span>
      </label>

      <label className="full">
        <span>Type your full legal name as signature</span>
        <input
          name="signatureName"
          required
          defaultValue={clientName}
          autoComplete="name"
        />
      </label>

      {error ? <p className="form-error">{error}</p> : null}

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Saving…" : "Sign waiver & confirm booking"}
      </button>
    </form>
  );
}

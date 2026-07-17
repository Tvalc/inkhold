"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  bookingId: string;
  sessionId?: string;
};

export function ConfirmPayment({ bookingId, sessionId }: Props) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const res = await fetch("/api/confirm-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ bookingId, sessionId }),
        });
        const data = (await res.json()) as { error?: string };
        if (!res.ok) {
          if (!cancelled) setError(data.error ?? "Payment confirm failed");
          return;
        }
        if (!cancelled) router.replace(`/booking/${bookingId}/waiver`);
      } catch {
        if (!cancelled) setError("Network error confirming payment");
      }
    }

    void run();
    return () => {
      cancelled = true;
    };
  }, [bookingId, sessionId, router]);

  if (error) {
    return (
      <div className="page-shell">
        <h1 className="page-title">Payment issue</h1>
        <p className="page-sub">{error}</p>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <h1 className="page-title">Confirming deposit…</h1>
      <p className="page-sub">Hang tight — next up is your waiver.</p>
    </div>
  );
}

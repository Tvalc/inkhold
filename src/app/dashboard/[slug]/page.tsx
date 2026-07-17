import Link from "next/link";
import { notFound } from "next/navigation";
import { getArtist, formatMoney } from "@/lib/artists";
import { listBookingsByArtist } from "@/lib/store";

type Props = {
  params: Promise<{ slug: string }>;
};

function statusLabel(status: string) {
  switch (status) {
    case "pending_deposit":
      return "Awaiting deposit";
    case "deposit_paid":
      return "Deposit paid";
    case "waiver_signed":
      return "Waiver signed";
    case "confirmed":
      return "Confirmed";
    case "cancelled":
      return "Cancelled";
    default:
      return status;
  }
}

export default async function DashboardPage({ params }: Props) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  const bookings = await listBookingsByArtist(slug);
  const confirmed = bookings.filter((b) => b.status === "confirmed").length;
  const depositSum = bookings
    .filter((b) =>
      ["deposit_paid", "waiver_signed", "confirmed"].includes(b.status),
    )
    .reduce((sum, b) => sum + b.depositCents, 0);

  return (
    <div className="page-shell wide">
      <p className="page-kicker">Artist dashboard</p>
      <h1 className="page-title">{artist.name}</h1>
      <p className="page-sub">
        {confirmed} confirmed · {formatMoney(depositSum)} deposits collected
        (demo store)
        <br />
        Public link:{" "}
        <Link href={`/a/${artist.slug}`}>/a/{artist.slug}</Link>
      </p>

      {bookings.length === 0 ? (
        <p className="muted">No bookings yet. Share your link and wait.</p>
      ) : (
        <table className="dash-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Piece</th>
              <th>Deposit</th>
              <th>Status</th>
              <th>When</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>
                  {b.clientName}
                  <br />
                  <span className="muted">{b.clientEmail}</span>
                </td>
                <td>
                  {b.placement} · {b.size}
                  <br />
                  <span className="muted">
                    {b.description.slice(0, 80)}
                    {b.description.length > 80 ? "…" : ""}
                  </span>
                </td>
                <td>{formatMoney(b.depositCents)}</td>
                <td>{statusLabel(b.status)}</td>
                <td className="muted">
                  {new Date(b.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

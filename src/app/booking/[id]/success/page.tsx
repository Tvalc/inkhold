import { ConfirmPayment } from "@/components/ConfirmPayment";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ session_id?: string }>;
};

export default async function BookingSuccessPage({
  params,
  searchParams,
}: Props) {
  const { id } = await params;
  const { session_id: sessionId } = await searchParams;

  return <ConfirmPayment bookingId={id} sessionId={sessionId} />;
}

import OnlinePayment from "./client-online-payment-page";
import { getPayments } from "./get-payments";

export default async function Page() {
  const payments = await getPayments();

  return <OnlinePayment data={payments} />;
}

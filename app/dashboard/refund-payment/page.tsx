import RefundPage from "./client-refund-page";
import { getRefunds } from "./get-refund";

export default async function Page() {
  const refunds = await getRefunds();

  return <RefundPage data={refunds} />;
}

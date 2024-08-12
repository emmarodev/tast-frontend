import OrderPage from "./client-order-page";
import { getBankDetails, getOrders } from "./get-orders";

export default async function Page() {
  const data = await getOrders();
  const bankDetails = await getBankDetails();
  
  return <OrderPage data={data} payDetails={bankDetails} />;
}

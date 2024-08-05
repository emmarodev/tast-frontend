import OrderPage from "./client-order-page";
import { getOrders } from "./get-orders";

export default async function Page() {
  const data = await getOrders();
  console.log(data);

  return <OrderPage data={data} />;
}
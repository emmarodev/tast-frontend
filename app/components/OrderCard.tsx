import Image from "next/image";
import canoe from "../../public/canoe.jpg";
import { BsReceipt } from "react-icons/bs";
import Link from "next/link";

function OrderCard({ data }: { data: any }) {
  console.log(data);
  return (
    <article className="rounded border border-gray-300 bg-white px-3 py-2 pb-4">
      <h3 className="mb-2 px-2 py-1 font-semibold capitalize">{data.title}</h3>
      <Image src={canoe} alt={data.photo} />
      <Link
        href={`/orders/${data._id}`}
        className="mx-auto mt-3 flex w-fit items-center gap-x-1 rounded-md bg-[#ffb200] px-4 py-2 text-xs font-semibold uppercase"
      >
        <BsReceipt />
        Order Now
      </Link>
    </article>
  );
}

export default OrderCard;

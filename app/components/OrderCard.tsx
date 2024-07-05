import Image from "next/image";
import canoe from "../../public/canoe.jpg";
import { BsReceipt } from "react-icons/bs";

function OrderCard() {
  return (
    <article className="border border-gray-300 rounded bg-white px-3 py-2 pb-4">
      <h3 className="mb-2 px-2 py-1 font-semibold">Stunning Design</h3>
      <Image src={canoe} alt="order card image" />
      <button className="mx-auto flex w-fit items-center gap-x-1 bg-[#ffb200] px-4 py-2 text-xs uppercase mt-3 rounded-md font-semibold">
        <BsReceipt />
        Order Now
      </button>
    </article>
  );
}

export default OrderCard;

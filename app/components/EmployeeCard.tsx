import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

function EmployeeCard({ data }: { data: any }) {
  return (
    <article className="flex flex-col items-center gap-y-2 rounded-lg bg-[#B0B0B080] py-6">
      <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[#ffb200]">
        <Image
          alt="Mountains"
          src={data.media}
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="h-6 w-[3px] bg-[#ffb200] group-hover:bg-black" />

      <div className="mb-4 text-center">
        <h3 className="text-xl font-semibold text-[#0F0D69]">Nina Sanchez</h3>
        <p>{data.title}</p>
      </div>

      <div className="flex gap-x-3">
        <Link href="" className="text-3xl text-blue-800">
          <FaFacebook />
        </Link>
        <Link href="" className="text-3xl">
          <FaXTwitter />
        </Link>
        <Link href="" className="text- text-3xl">
          <GrInstagram />
        </Link>
        <Link href="" className="text-3xl text-blue-700">
          <BsLinkedin />
        </Link>
      </div>
    </article>
  );
}

export default EmployeeCard;

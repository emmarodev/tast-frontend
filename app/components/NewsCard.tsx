import Image from "next/image";
import canoe from "../../public/canoe.jpg";
import Line from "./Line";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const NewsCard = () => {
  return (
    <article className="relative overflow-hidden bg-white p-2 font-medium text-[#00000099] shadow-xl">
      <header className="relative mb-4 h-52">
        <Image
          alt="Mountains"
          src={canoe}
          placeholder="blur"
          quality={100}
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </header>

      <main className="mb-2 px-3">
        <p className="mb-2 text-xs tracking-wide">NOV. 12, 2024</p>
        <div className="mb-1 flex flex-col gap-y-1">
          <Line />
          <h3 className="text-lg font-bold text-black">Stunning Design</h3>
        </div>
        <p className="text-sm">Of Scripture chosen especially for the su</p>
      </main>

      <footer className="flex items-center gap-x-4 px-3">
        <div className="flex items-center gap-x-2">
          <IoEyeSharp className="text-xl font-bold text-[#172554]" />
          <p className="font-semibold text-[#79797999]">1.2k</p>
        </div>
        <div className="flex items-center gap-x-2">
          <IoMdShare className="text-xl font-bold text-[#172554]" />
          <p className="font-semibold text-[#79797999]">1.2k</p>
        </div>
        <div className="flex items-center gap-x-2">
          <CiHeart className="text-xl font-bold text-[#172554]" />
          <p className="font-semibold text-[#79797999]">1.2k</p>
        </div>
      </footer>
    </article>
  );
};

export default NewsCard;

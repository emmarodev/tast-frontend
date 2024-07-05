import Image from "next/image";
import Line from "./Line";
import Overlay from "./Overlay";
import canoe from "../../public/canoe.jpg";
import ceiling from "../../public/ceiling.jpg";
import { CiHeart } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

export default function FeaturesCard() {
  return (
    <div className="flip-card relative shadow-xl">
      <div className="flip-card-inner hover:rotate-y-180 absolute h-fit transform transition duration-500 ease-in-out">
        <FeaturesCardFront />
        <FeaturesCardBack />
      </div>
    </div>
  );
}

const FeaturesCardFront = () => {
  return (
    <article className="flip-card-front absolute flex h-[400px] w-full flex-col rounded-md">
      <header className="relative h-full grow">
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
        <Overlay />
        <Tag />
        <div className="absolute bottom-6 left-6 z-30">
          <Line />
          <h3 className="mt-2 text-xl font-bold text-white">
            Stunning Designs
          </h3>
        </div>
      </header>

      <div className="bg-white px-6 py-6 text-sm font-semibold text-[#727272]">
        <main>
          <p className="mb-1 text-xs tracking-wider">NOV. 12, 2024</p>
          <button className="mb-4 w-full rounded bg-[#ffb200] py-3 text-black">
            SEE PLAN
          </button>
        </main>

        <footer className="flex items-center gap-x-4">
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
      </div>
    </article>
  );
};

const FeaturesCardBack = () => {
  return (
    <article className="flip-card-back relative h-[400px] w-full bg-gray-900 px-6 py-10">
      <Image
        alt="Mountains"
        src={ceiling}
        placeholder="blur"
        quality={100}
        layout="fill"
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="-z-20"
      />
      <Overlay />

      <Tag />

      <main className="relative z-50 mb-4 pt-4 text-sm font-semibold text-[#727272]">
        <Line />
        <h3 className="mb-4 mt-2 text-2xl font-bold text-white">
          Stunning Designs
        </h3>
        <ul className="mb-4 flex flex-col gap-y-1 text-white">
          <li>
            <span className="font-bold">House:</span> 1200 sq ft. house
          </li>
          <li>
            <span className="font-bold">Kitchens:</span> 2
          </li>
          <li>
            <span className="font-bold">Bedrooms:</span> 3
          </li>
          <li>
            <span className="font-bold">Balconies:</span> 1
          </li>
        </ul>
        <p className="mb-3 text-xs tracking-wider">NOV. 12, 2024</p>
        <button className="w-full rounded bg-[#ffb200] py-3 text-black">
          SEE PLAN
        </button>
      </main>

      <footer className="relative z-50 flex items-center gap-x-4 text-base">
        <div className="flex items-center gap-x-2">
          <IoEyeSharp className="text-2xl font-bold text-[#ffb200]" />
          <p className="font-medium text-white">1.2k</p>
        </div>
        <div className="flex items-center gap-x-2">
          <IoMdShare className="text-2xl font-bold text-[#ffb200]" />
          <p className="font-medium text-white">1.2k</p>
        </div>
        <div className="flex items-center gap-x-2">
          <CiHeart className="text-2xl font-bold text-[#ffb200]" />
          <p className="font-medium text-white">1.5k</p>
        </div>
      </footer>
    </article>
  );
};

const Tag = () => {
  return (
    <div className="absolute -right-2 top-6 z-40 rounded bg-[#ffb200] px-4 py-1 text-white">
      <p>$2300</p>
    </div>
  );
};

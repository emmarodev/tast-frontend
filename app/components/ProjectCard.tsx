import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoMdPricetag, IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

export default function ProjectCard({ image }: { image: any }) {
  return (
    <article className="relative overflow-hidden rounded-xl bg-white px-6 py-5 font-medium text-[#00000099] shadow-xl">
      <header className="relative mb-4 h-52 overflow-hidden rounded-lg">
        <Image
          alt="Mountains"
          src={image}
          placeholder="blur"
          quality={100}
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </header>

      <main className="mb-2">
        <p className="text-xs tracking-wide">NOV. 12, 2024</p>
        <h3 className="text-lg font-bold text-black">Web Development</h3>
        <p className="text-sm">Of Scripture chosen especially for the su</p>
      </main>

      <footer className="flex items-center gap-x-4">
        <button className="flex items-center gap-x-2">
          <IoEyeSharp className="text-xl font-bold text-[#172554]" />
          <p className="font-semibold text-[#79797999]">1.2k</p>
        </button>
        <button className="flex items-center gap-x-2">
          <IoMdShare className="text-xl font-bold text-[#172554]" />
          <p className="font-semibold text-[#79797999]">1.2k</p>
        </button>
        <button className="flex items-center gap-x-2">
          <CiHeart className="text-xl font-bold text-[#172554]" />
          <p className="font-semibold text-[#79797999]">1.2k</p>
        </button>
      </footer>

      <Tag />
    </article>
  );
}

const Tag = () => {
  return (
    <div className="absolute right-0 top-0 flex items-center gap-x-1 rounded-es-full bg-[#172554] px-6 py-1.5 font-medium text-white">
      <IoMdPricetag />
      <p>$1234</p>
    </div>
  );
};

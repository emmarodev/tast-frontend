import Image from "next/image";
import angular from "../../public/logos/angular.svg";
import figma from "../../public/logos/figma.svg";
import adobe from "../../public/logos/adobe.svg";
import { SiNestjs, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Tools() {
  return (
    <div className="flex items-center justify-center gap-x-5">
      <div className="tool-container bg-[#330000]">
        <FaReact className="text-5xl text-blue-500" />
      </div>
      <div className="tool-container bg-blue-900 text-4xl font-bold text-blue-400">
        Ps
      </div>
      <div className="tool-container bg-[#330000] text-pink-600">
        <SiNestjs className="text-5xl" />
      </div>
      <div className="tool-container bg-[#330000] text-4xl font-bold text-yellow-600">
        Ai
      </div>
      <div className="tool-container bg-[#330000]">
        <Image
          src={angular}
          alt={"angular icon"}
          width={50}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="tool-container bg-[#330000]">
        <Image
          src={figma}
          alt={"figma icon"}
          width={30}
          height={40}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="tool-container bg-[#330000]">
        <Image
          src={adobe}
          alt={"adobe icon"}
          width={40}
          height={40}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="tool-container bg-[#330000]">
        <SiTailwindcss className="text-5xl text-blue-500" />
      </div>
    </div>
  );
}

export default Tools;

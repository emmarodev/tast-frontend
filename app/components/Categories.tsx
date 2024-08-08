import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// {
//   categories: { title: string; link: string }[];
// }
function Categories({ categories }: any) {
  return (
    <div className="flex items-center gap-x-4">
      {/* <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ffb200] text-[#231B7D] hover:bg-[#ffb200]/90">
        <FaArrowLeft />
      </button> */}
      <div className="grid grow grid-cols-7 gap-x-6">
        {categories.map((category: any, i: number) => {
          return (
            <Link
              href={category.link}
              key={i}
              className="inline-block w-fit rounded bg-white px-4 py-3 text-center text-xs font-semibold uppercase transition-all duration-150 hover:bg-black hover:text-white"
            >
              {category.title}
            </Link>
          );
        })}
      </div>
      {/* <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ffb200] text-[#231B7D] hover:bg-[#ffb200]/90">
        <FaArrowRight />
      </button> */}
    </div>
  );
}

export default Categories;

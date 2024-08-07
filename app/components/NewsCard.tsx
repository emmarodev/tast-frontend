"use client";

import Image from "next/image";
import canoe from "../../public/canoe.jpg";
import Line from "./Line";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { ArchitectureDataProps } from "../(landing-pages)/architecture/definition";
import { formatISODateString } from "../lib/formatISODateString";
import Link from "next/link";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { viewFavShare } from "../(landing-pages)/action";

const NewsCard = ({ data }: { data: ArchitectureDataProps }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <article
      className="relative overflow-hidden bg-white p-2 font-medium text-[#00000099] shadow-xl"
      onMouseEnter={() =>
        viewFavShare(
          { blogid: data._id, contain: "view" },
          "user/blog/action",
          "/news",
        )
      }
    >
      <header className="relative mb-4 h-52">
        <Link href={`/news/${data._id}`}>
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
        </Link>
      </header>

      <main className="mb-2 px-3">
        <p className="mb-2 text-xs tracking-wide">
          {formatISODateString(data.createdAt)}
        </p>
        <div className="mb-1 flex flex-col gap-y-1">
          <Line />
          <h3 className="text-lg font-bold capitalize text-black">
            {data.title}
          </h3>
        </div>
        <p className="text-sm">{data.description}</p>
      </main>

      <footer className="flex items-center gap-x-4 px-3">
        <div className="flex items-center gap-x-2">
          <IoEyeSharp className="text-xl font-bold text-[#172554]" />
          <p className="font-semibold text-[#79797999]">{data.view}</p>
        </div>
        <div className="flex items-center gap-x-2">
          <IoMdShare className="text-xl font-bold text-[#172554]" />
          <p className="font-semibold text-[#79797999]">{data.share}</p>
        </div>
        <button
          className="flex items-center gap-x-2 text-xl font-bold"
          onClick={() => {
            setClicked(!clicked);
            viewFavShare(
              { blogid: data._id, contain: "like" },
              "user/blog/action",
              "/news",
            );
          }}
        >
          {clicked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <CiHeart className="text-[#172554]" />
          )}

          <p className="font-semibold text-[#79797999]">{data.favourite}</p>
        </button>
      </footer>
    </article>
  );
};

export default NewsCard;

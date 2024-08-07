"use client";

import { useState } from "react";
import Line from "./Line";
import { IoIosCloseCircle } from "react-icons/io";

export default function ServiceCardButton({ data }: { data: any }) {
  const [isModalOpen, setModal] = useState(false);

  return (
    <div>
      <button
        className="mt-4 rounded border border-[#ffb200] bg-transparent px-4 py-2 text-xs font-bold transition-all duration-150 group-hover:border-black group-hover:bg-black group-hover:text-white"
        onClick={() => setModal(true)}
      >
        LEARN MORE
      </button>

      {isModalOpen && <Modal data={data} handleClick={() => setModal(false)} />}
    </div>
  );
}

const Modal = ({
  data,
  handleClick,
}: {
  data: any;
  handleClick: () => void;
}) => {
  return (
    <div className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-black/50">
      <article className="relative z-50 flex w-full max-w-[1040px] flex-col items-center gap-y-5 bg-white p-10">
        <button
          className="absolute right-0 top-0 text-3xl text-red-700"
          onClick={handleClick}
        >
          <IoIosCloseCircle />
        </button>
        <Line />
        <h2 className="text-2xl font-bold uppercase">{data.title}</h2>
        <p>{data.description}</p>
      </article>
    </div>
  );
};

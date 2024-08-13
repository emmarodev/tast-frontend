import React from "react";
import { GiNetworkBars } from "react-icons/gi";

function Card({
  title,
  number,
}: {
  color?: string;
  title: string;
  number: number;
}) {
  return (
    <article className="flex justify-between gap-x-4 rounded-md bg-[#D4D4D4] px-4 py-2 first:bg-[#FFB200]">
      <h3 className="font-semibold capitalize">{title}</h3>

      <div className="grid gap-y-4">
        <GiNetworkBars />
        <p className="text-right font-bold">{number}</p>
      </div>
    </article>
  );
}

export default Card;

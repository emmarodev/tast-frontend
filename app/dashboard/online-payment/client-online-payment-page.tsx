"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../components/Card";

function OnlinePayment({ data }: { data: any }) {
  const cardTitles = [
    "Total payment",
    "Total pay amount",
    "Total pending payment",
    "Total accepted payment",
    "Total spam payment",
  ];

  return (
    <section className="rounded-xl px-6 py-5">
      <div className="mb-3 grid grid-cols-4 gap-3">
        {cardTitles.map((title, i) => (
          <Card title={title} key={i} />
        ))}
      </div>

      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payments</h1>
        <div>
          <input
            type="search"
            placeholder="Search here..."
            className="mr-2 min-w-[280px] rounded-lg border px-3 py-3 shadow-xl focus:border-[#FFB200] focus:outline-none"
          />
          <button className="rounded-lg bg-[#FFB200] px-6 py-3 font-semibold">
            Search
          </button>
        </div>
      </header>

      <table className="mt-4 w-full rounded-lg border border-[#FFB200] text-sm">
        <thead className="bg-[#FFB200]">
          <tr>
            <th className="py-6">No.</th>
            <th className="w-[12%]">Payment ID</th>
            <th className="w-[12%]">Project Name</th>
            <th className="w-[13%]">Payment Method</th>
            <th className="w-[12%]">Payment Type</th>
            <th className="w-[12%]">Payment Amount</th>
            <th className="w-[12%]">Payment Day</th>
            <th className="w-[12%]">Status</th>
            <th className="w-[11%]">See</th>
          </tr>
        </thead>
        <tbody className="border border-[#FFB200] text-center">
          <tr className="odd:bg-[#FAEFD8] even:bg-white">
            <td className="border-r border-r-[#FFB200] py-6">
              <span className="rounded bg-[#FFB200] px-2 py-1 font-semibold">
                1
              </span>
            </td>
            <td className="border-r border-r-[#FFB200]">045001</td>
            <td className="border-r border-r-[#FFB200]">Web dev</td>
            <td className="border-r border-r-[#FFB200]">-</td>
            <td className="border-r border-r-[#FFB200]">-</td>
            <td className="border-r border-r-[#FFB200]">-</td>
            <td className="border-r border-r-[#FFB200]">03-02-25</td>
            <td className="border-r border-r-[#FFB200]">
              <span className="rounded bg-[#FF7777] px-3 py-1 text-white">
                Spam
              </span>
            </td>
            <td>
              <button className="rounded bg-[#FFB200] px-3 py-2 text-sm font-semibold uppercase">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <footer className="flex justify-between bg-white px-4 py-6 text-sm">
        <div>
          <p className="font-bold">Showing 1 to 5 of 97 results</p>
        </div>
        <div className="flex items-center gap-x-2">
          <FaArrowLeft className="text-[#FFB200]" />
          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFB200] text-xs font-semibold text-white">
            1
          </button>
          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF2D4] text-xs font-semibold text-black">
            2
          </button>
          <FaArrowRight className="text-[#FFB200]" />
        </div>
      </footer>
    </section>
  );
}

export default OnlinePayment;

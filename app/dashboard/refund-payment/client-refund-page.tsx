"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../components/Card";
import { useState } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";

function RefundPage({ data }: { data: any }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const cardTitles = [
    "Total refund",
    "Total refund amount",
    "Total pending refund",
    "Total sending refund",
    "Total ineligible refund",
  ];

  return (
    <section className="rounded-xl px-6 py-5">
      <div className="mb-3 grid grid-cols-4 gap-3">
        {cardTitles.map((title, i) => (
          <Card title={title} key={i} />
        ))}
      </div>

      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Refunds</h1>
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
            <th className="w-[5%] py-6">No.</th>
            <th className="w-[14%]">Refund ID</th>
            <th className="w-[14%]">Project Name</th>
            <th className="w-[14%]">Refund Type</th>
            <th className="w-[14%]">Refund Amount</th>
            <th className="w-[14%]">Refund Day</th>
            <th className="w-[14%]">Status</th>
            <th className="w-[13%]">See</th>
          </tr>
        </thead>
        <tbody className="border border-[#FFB200] text-center">
          {data?.length !== 0 ? (
            <tr>
              <td colSpan={9} className="py-6 text-2xl">
                There is no available order
              </td>
            </tr>
          ) : (
            <tr className="odd:bg-[#FAEFD8] even:bg-white">
              <td className="border-r border-r-[#FFB200] py-6">
                <span className="rounded bg-[#FFB200] px-2 py-1 font-semibold">
                  1
                </span>
              </td>
              <td className="border-r border-r-[#FFB200]">045001</td>
              <td className="border-r border-r-[#FFB200]">Web dev</td>
              <td className="border-r border-r-[#FFB200]">SBI Bank</td>
              <td className="border-r border-r-[#FFB200]">$110</td>
              <td className="border-r border-r-[#FFB200]">03-03-25</td>
              <td className="border-r border-r-[#FFB200]">
                <button
                  className="rounded bg-[#FF7777] px-3 py-1 text-white"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Ineligible
                </button>
              </td>
              <td>
                <button className="rounded bg-[#FFB200] px-3 py-2 text-sm font-semibold uppercase">
                  View
                </button>
              </td>
            </tr>
          )}
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

      {showPaymentModal && (
        <div className="absolute left-0 top-0 h-screen w-screen bg-black/50">
          <article className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 px-8">
            <div className="relative">
              <button
                className="absolute -left-4 -top-4 text-2xl text-red-700"
                onClick={() => setShowPaymentModal(false)}
              >
                <IoCloseCircle />
              </button>
              <h2 className="text-center text-lg font-bold text-[#4402FF]">
                Refund Invoice
              </h2>
              <div className="absolute right-0 top-0 text-[8px] font-semibold">
                <p>Refund ID: 45KdF</p>
                <p>Refund Data: 02 Sept, 1010</p>
              </div>
            </div>

            <p className="mt-2 font-bold">
              Dear, Mr. Jack <br /> Your order ID: 64646 for the Logo Design
              project, with a Refand amount of <br /> 510 USD,{" "}
              <span className="text-[#5296D6]">
                Your refund status is pending
              </span>
              .
            </p>

            <section className="mt-4 font-medium">
              <h3 className="font-bold">From</h3>
              <div className="flex justify-between gap-x-8 border text-sm">
                <div>
                  <div>
                    <p>Account Holder Name: Mr Jack</p>
                    <p>Receipient&apos;s Bank Name: Paypal</p>
                    <p>Receipient&apos;s Bank Account Number: 9489373402</p>
                    <p>Receipient&apos;s Bank Routing Number: 94d09Jks</p>
                    <p>IBAN or SWIFT/BIC code: JHIS</p>
                    <p>What is the reason for the refund: my project problem</p>
                  </div>
                </div>
                <div className="">
                  <div>
                    <p>Project amount: 1500 USD</p>
                    <p>Paid Amount: 500 USD</p>
                    <p>Left Amount: 1000 USD</p>
                  </div>
                  <div>
                    <p className="my-4">Refund Amount: 500USD</p>
                    <p className="rounded-lg bg-[#D9D9D9] px-8 py-2 text-center font-bold">
                      Total: 510 USD
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      )}
    </section>
  );
}

export default RefundPage;

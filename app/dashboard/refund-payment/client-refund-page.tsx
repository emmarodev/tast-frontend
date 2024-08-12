"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../components/Card";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { formatISODateString } from "@/app/lib/formatISODateString";
import { getRefunds } from "./get-refund";

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
          {data?.length === 0 ? (
            <tr>
              <td colSpan={9} className="py-6 text-2xl">
                There is no available refund
              </td>
            </tr>
          ) : (
            data?.map((d: any, i: number) => {
              return (
                <tr className="odd:bg-[#FAEFD8] even:bg-white" key={d?._id}>
                  <td className="border-r border-r-[#FFB200] py-6">
                    <span className="rounded bg-[#FFB200] px-2 py-1 font-semibold">
                      {i + 1}
                    </span>
                  </td>
                  <td className="border-r border-r-[#FFB200]">-</td>
                  <td className="border-r border-r-[#FFB200]">{d.bank_name}</td>
                  <td className="border-r border-r-[#FFB200]">
                    {d.bank_wallet}
                  </td>
                  <td className="border-r border-r-[#FFB200]">{d.amount}</td>
                  <td className="border-r border-r-[#FFB200]">
                    {formatISODateString(d.createdAt)}
                  </td>
                  <td className="border-r border-r-[#FFB200]">
                    <button className="rounded bg-[#FF7777] px-3 py-1 text-white">
                      {d.status}
                    </button>
                  </td>
                  <td>
                    <button
                      className="rounded bg-[#FFB200] px-3 py-2 text-sm font-semibold uppercase"
                      onClick={async () => {
                        setShowPaymentModal(true);
                      }}
                    >
                      View
                    </button>
                  </td>

                  {showPaymentModal && (
                    <div className="absolute left-0 top-0 h-screen w-screen bg-black/10">
                      <article className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 px-8">
                        <div className="relative text-left">
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
                            <p>
                              Refund Date: {formatISODateString(d.createdAt)}
                            </p>
                          </div>
                        </div>

                        <p className="mt-2 text-left font-bold">
                          Dear, Mr. Jack <br /> Your order ID: {d.orderid} for
                          the Logo Design project, with a Refand amount of{" "}
                          {d.amount} {d.currency},{" "}
                          <span className="text-[#5296D6]">
                            Your refund status is {d.status}
                          </span>
                          .
                        </p>

                        <section className="mt-4 text-left font-medium">
                          <h3 className="font-bold">From</h3>
                          <div className="flex justify-between gap-x-8 text-sm">
                            <div>
                              <div>
                                <p>Account Holder Name: {d.account_name}</p>
                                <p>
                                  Receipient&apos;s Bank Name: {d.bank_name}
                                </p>
                                <p>
                                  Receipient&apos;s Bank Account Number:{" "}
                                  {d.account_number}
                                </p>
                                <p>
                                  Receipient&apos;s Bank Routing Number:{" "}
                                  {d.routing_number}
                                </p>
                                <p>IBAN or SWIFT/BIC code: {d.code}</p>
                                <p>
                                  What is the reason for the refund: {d.reason}
                                </p>
                              </div>
                            </div>
                            <div className="">
                              <div>
                                <p>Project amount: 0 USD</p>
                                <p>Paid Amount: 0 USD</p>
                                <p>Left Amount: 0 USD</p>
                              </div>
                              <div>
                                <p className="my-4">
                                  Refund Amount: {d.amount}
                                  {d.currency}
                                </p>
                                <p className="rounded-lg bg-[#D9D9D9] px-8 py-2 text-center font-bold">
                                  Total: {d.amount} {d.currency}
                                </p>
                              </div>
                            </div>
                          </div>
                        </section>
                      </article>
                    </div>
                  )}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {/* <footer className="flex justify-between bg-white px-4 py-6 text-sm">
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
      </footer> */}
    </section>
  );
}

export default RefundPage;

"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../components/Card";
import Link from "next/link";
import { Suspense, useState } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { formatISODateString } from "@/app/lib/formatISODateString";

function OnlinePayment({ data }: { data: any }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const cardTitles = [
    { title: "Total payment", number: data.totalpayments },
    { title: "Total payment amount", number: 0 },
    { title: "Total pending payment", number: data.totalpendingpayment },
    { title: "Total accepted payment", number: data.totalacceptedpoayment },
    { title: "Total spam payment", number: data.totalspampayment },
  ];

  return (
    <section className="rounded-xl px-6 py-5">
      <div className="mb-3 grid grid-cols-4 gap-3">
        {cardTitles.map((obj: { title: string; number: number }, i) => (
          <Card title={obj.title} number={obj.number} key={i} />
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

      <Suspense>
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
            {data?.userpayments.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-6 text-2xl">
                  There is no available payments
                </td>
              </tr>
            ) : (
              data?.userpayments.map((d: any, i: number) => (
                <tr className="odd:bg-[#FAEFD8] even:bg-white" key={d._id}>
                  <td className="border-r border-r-[#FFB200] py-6">
                    <span className="rounded bg-[#FFB200] px-2 py-1 font-semibold">
                      {i + 1}
                    </span>
                  </td>
                  <td className="border-r border-r-[#FFB200]">{"-"}</td>
                  <td className="border-r border-r-[#FFB200]">{"-"}</td>
                  <td className="border-r border-r-[#FFB200] capitalize">
                    {d.bank_wallet}
                  </td>
                  <td className="border-r border-r-[#FFB200]">{"-"}</td>
                  <td className="border-r border-r-[#FFB200]">{d.amount}</td>
                  <td className="border-r border-r-[#FFB200]">
                    {formatISODateString(d.createdAt)}
                  </td>
                  <td className="border-r border-r-[#FFB200]">
                    <button className="rounded bg-[#FF7777] px-3 py-1 capitalize text-white">
                      {d.status}
                    </button>
                  </td>
                  <td>
                    <button
                      className="rounded bg-[#FFB200] px-3 py-2 text-sm font-semibold uppercase"
                      onClick={() => setShowPaymentModal(true)}
                    >
                      View
                    </button>
                  </td>

                  {showPaymentModal && (
                    <div className="absolute left-0 top-0 h-screen w-screen bg-black/10 text-left">
                      <article className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 px-8">
                        <div className="relative">
                          <button
                            className="absolute -left-4 -top-4 text-2xl text-red-700"
                            onClick={() => setShowPaymentModal(false)}
                          >
                            <IoCloseCircle />
                          </button>
                          <h2 className="text-center text-lg font-bold text-[#4402FF]">
                            Payment Reception
                          </h2>
                          <div className="absolute right-0 top-0 text-[9px] font-semibold">
                            <p>Payment ID: {d._id}</p>
                            <p>
                              Paymentment Data:{" "}
                              {formatISODateString(d.createdAt)}
                            </p>
                          </div>
                        </div>

                        <p className="mt-2 font-bold">
                          Dear, {d.account_name} <br /> Your order id: {d._id}{" "}
                          for Logo Design project. You have paid {d.amount}{" "}
                          <br /> {d.currency} to sbi bank.{" "}
                          <span className="text-[#5296D6]">
                            Your payment status is {d.status}
                          </span>
                          .
                        </p>

                        <section className="mt-4 font-medium">
                          <h3 className="font-bold">From</h3>
                          <div className="grid grid-cols-2 gap-x-8 text-sm">
                            <div>
                              <div>
                                <p>Account Holder Name: {d.account_name}</p>
                                <p>Bank Name: Paypal</p>
                                <p>Account Number: {d.account_number}</p>
                                <p>Transaction ID: {d.transaction_id}</p>
                                <p>
                                  Transaction Receipt:{" "}
                                  {d.transaction_receipt ? "Yes" : "No"}
                                </p>
                                <p>
                                  Additional Information: {d.additional_note}
                                </p>
                              </div>
                            </div>
                            <div className="">
                              <div>
                                <p>Project amount: 0</p>
                                <p>Paid Amount: 0</p>
                                <p>Left Amount: 0</p>
                              </div>
                              <div>
                                <p>
                                  Pay Amount: {d.amount} {d.currency}
                                </p>
                                <p>VAT(2%): 10</p>
                                <p>
                                  Total: {d.amount + 10} {d.currency}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 items-start gap-x-8">
                            <Image
                              src="/images/receipt.png"
                              alt="A receipt"
                              width={40}
                              height={59}
                              className="mt-1"
                            />
                            <span className="mt-1 inline-block w-full rounded-lg bg-[#D9D9D9] py-2 text-center font-bold">
                              Total Amount: {d.amount + 10} {d.currency}
                            </span>
                          </div>
                        </section>
                      </article>
                    </div>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </Suspense>

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

export default OnlinePayment;

const PaymentInformation = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="grid shrink-0 gap-y-4 rounded-lg bg-[#E8E3E3] p-5 shadow-xl shadow-[#e8e3e3]/50">
      <div>
        <p>Project amount: 1500 USD</p>
        <p>Paid Amount: 500 USD</p>
        <p>Left Amount: 1000 USD</p>
      </div>

      <div>
        <p>Pay Amount: 500USD</p>
        <p>VAT(2%): 10</p>
        <p>Total: 510 USD</p>
      </div>

      <button
        onClick={handleClick}
        className="rounded-lg bg-[#3C5A99] py-3 text-white"
      >
        Continue
      </button>
    </div>
  );
};

"use client";

import { SetStateAction, useState } from "react";
import Card from "../components/Card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

export default function OrderPage({ data }: { data: any }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showVerifyPaymentModal, setShowVerifyPaymentModal] = useState(false);
  const [successPaymentModal, setSuccessPaymentModal] = useState(false);

  const cardTitles = [
    "Total Orders",
    "Total project amount",
    "Total project paid",
    "Total amount left",
    "Total pending Orders",
    "Total Waiting orders",
    "Total working orders",
    "total complete orders",
    "total delivery orders",
    "total cancel orders",
  ];

  return (
    <section className="rounded-xl px-6 py-5">
      <div className="mb-3 grid grid-cols-4 gap-3">
        {cardTitles.map((title, i) => (
          <Card title={title} key={i} />
        ))}
      </div>

      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
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
            <th className="w-[12%]">Order ID</th>
            <th className="w-[12%]">Project Name</th>
            <th className="w-[13%]">Project Amount</th>
            <th className="w-[12%]">Paid Amount</th>
            <th className="w-[12%]">Left Amount</th>
            <th className="w-[12%]">Update</th>
            <th className="w-[12%]">Status</th>
            <th className="w-[11%]">See</th>
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
              <td className="border-r border-r-[#FFB200]">-</td>
              <td className="border-r border-r-[#FFB200]">-</td>
              <td className="border-r border-r-[#FFB200]">-</td>
              <td className="border-r border-r-[#FFB200]">
                <button className="rounded bg-[#FFB200] px-3 py-2 text-sm font-semibold">
                  Update
                </button>
              </td>
              <td className="border-r border-r-[#FFB200]">
                <button
                  className="rounded bg-[#FF7777] px-3 py-1 text-white"
                  onClick={() => setShowPaymentModal(true)}
                >
                  Pending
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
          <article className="absolute left-1/2 top-1/2 w-3/5 -translate-x-1/2 -translate-y-1/2 bg-white">
            <header className="border py-5 shadow-lg">
              <form
                action={"somthing"}
                className="flex items-center justify-center gap-x-5"
              >
                <div>
                  {/* <label
                    htmlFor="pay_method"
                    className="mb-1 block px-4 text-xs"
                  >
                    Payment Method
                  </label> */}
                  <select className="rounded-full border-2 border-[#1497CF] px-4 py-3 text-sm">
                    <option value="">Payment method</option>
                  </select>
                </div>
                <div>
                  {/* <label
                    htmlFor="pay_method"
                    className="mb-1 block px-4 text-xs"
                  >
                    Select Wallet
                  </label> */}
                  <select className="rounded-full border-2 border-[#1497CF] px-4 py-3 text-sm">
                    <option value="">Select wallet</option>
                  </select>
                </div>
                <div>
                  {/* <label
                    htmlFor="pay_method"
                    className="mb-1 block px-4 text-xs"
                  >
                    Payment Amount
                  </label> */}
                  <input
                    className="rounded-full border-2 border-[#1497CF] px-4 py-3 text-sm placeholder:text-black"
                    placeholder="Payment Amount"
                  />
                </div>
              </form>
            </header>

            <main className="flex items-center justify-between gap-x-10 px-8 py-6">
              <div className="flex grow items-center justify-between gap-x-6">
                <Image
                  src="/images/payoneer.png"
                  alt="Payoneer icon"
                  width={150}
                  height={80}
                />
                <div className="text-sm">
                  <p>Bank: Payoneer</p>
                  <p>Account Name: Parsonal</p>
                  <p>Account: 494949449</p>
                  <p>Routing: SD46649646</p>
                </div>
                <Image
                  src="/images/qr-code.png"
                  alt="A QR code"
                  width={80}
                  height={80}
                />
              </div>
              <PaymentInformation
                handleClick={() => {
                  setShowPaymentModal(false);
                  setShowVerifyPaymentModal(true);
                }}
              />
            </main>
            <footer>
              <p className="py-4 text-center text-sm font-semibold text-red-700">
                Click on continue after you have paid the specified amount to
                the bank info provided here
              </p>
            </footer>
          </article>
        </div>
      )}

      {showVerifyPaymentModal && (
        <div className="absolute left-0 top-0 h-screen w-screen bg-black/50">
          <article className="absolute left-1/2 top-1/2 max-h-[90vh] w-3/5 -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white p-5">
            <h2 className="mb-8 text-2xl font-bold">
              Enter your Mobile Wallet Information
            </h2>

            <div className="flex items-center gap-x-10">
              <form action={"something"} className="grid grow gap-y-4">
                <div>
                  <label
                    htmlFor="ahn"
                    className="mb-1 block text-sm font-medium"
                  >
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    id="ahn"
                    className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mwn"
                    className="mb-1 block text-sm font-medium"
                  >
                    Mobile Wallet Name
                  </label>
                  <input
                    type="text"
                    id="mwn"
                    className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="an"
                    className="mb-1 block text-sm font-medium"
                  >
                    Account Numer
                  </label>
                  <input
                    type="text"
                    id="an"
                    className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="tid"
                    className="mb-1 block text-sm font-medium"
                  >
                    Transaction ID
                  </label>
                  <input
                    type="text"
                    id="tid"
                    className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="tr"
                    className="mb-1 block text-sm font-medium"
                  >
                    Transaction Receipt
                  </label>
                  <input
                    type="text"
                    id="tr"
                    className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="adi"
                    className="mb-1 block text-sm font-medium"
                  >
                    Any additional Information
                  </label>
                  <input
                    type="text"
                    id="adi"
                    className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                  />
                </div>
                <div className="flex items-center gap-x-4">
                  <input type="checkbox" checked id="tac" />
                  <label htmlFor="tac">
                    I agree with the terms and condition
                  </label>
                </div>
              </form>
              <div>
                <h2 className="mb-2 text-center text-xl font-bold">
                  Payment Processing
                </h2>
                <PaymentInformation
                  handleClick={() => {
                    setShowVerifyPaymentModal(false);
                    setSuccessPaymentModal(true);
                  }}
                />
              </div>
            </div>
          </article>
        </div>
      )}

      {successPaymentModal && (
        <div className="absolute left-0 top-0 h-screen w-screen bg-black/50">
          <article className="absolute left-1/2 top-1/2 max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-5">
            <div className="mb-6 grid gap-y-0.5 px-4 text-center">
              <GiCheckMark className="mx-auto text-4xl font-black text-green-400" />
              <h3 className="text-2xl font-bold text-green-400">
                Payment Succesful
              </h3>
              <p className="font-semibold text-gray-500">
                Thank you! Your payment is complete
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="mx-auto rounded bg-green-500 p-1 px-2 text-sm font-medium text-white"
                onClick={() => setSuccessPaymentModal(false)}
              >
                Done
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

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

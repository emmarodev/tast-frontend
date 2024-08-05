"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../components/Card";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";

function RefundPage({ data }: { data: any }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showCreatePaymentModal, setShowCreatePaymentModal] = useState(false);
  const [successPaymentModal, setSuccessPaymentModal] = useState(false);

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
                  onClick={() => setShowCreatePaymentModal(true)}
                >
                  Ineligible
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
              <div className="flex justify-between gap-x-8 text-sm">
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

      {showCreatePaymentModal && (
        <div className="absolute left-0 top-0 h-screen w-screen bg-black/50">
          <article className="no-scrollbar absolute left-1/2 top-1/2 max-h-[95vh] w-3/5 -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white">
            <form
              action={"somthing"}
              className="mb-10 flex items-center justify-center gap-x-5 py-5 shadow-xl"
            >
              <div>
                {/* <label
                    htmlFor="pay_method"
                    className="mb-1 block px-4 text-xs"
                  >
                    Payment Method
                  </label> */}
                <select className="rounded-full border-2 border-[#1497CF] px-4 py-3 text-sm">
                  <option value="">Refund method</option>
                </select>
              </div>
              <div className="flex items-center gap-x-1">
                <label
                  htmlFor="pay_method"
                  className="mb-1 text-sm font-semibold"
                >
                  Refund Amount
                </label>
                <input
                  className="rounded-full border-2 border-[#1497CF] px-4 py-3 text-sm placeholder:text-black"
                  placeholder="Refund Amount"
                />
              </div>
            </form>

            <h2 className="mb-8 px-5 text-2xl font-bold">
              Enter your payment refund Information
            </h2>

            <div className="mb-10 flex items-center gap-x-10 px-5">
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
                    Receipient&apos;s Bank Name
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
                    Receipient&apos;s Bank Account Numer
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
                    Receipient&apos;s Bank Routing Numer
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
                    IBAN or SWIFT/BIC code
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
                    What is the reason for the refund?
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
                  Refund Processing
                </h2>
                <PaymentInformation
                  handleClick={() => {
                    setShowCreatePaymentModal(false);
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
          <article className="absolute left-1/2 top-1/2 max-h-[90vh] w-full max-w-[450px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-5">
            <div className="mb-6 grid gap-y-0.5 px-4 text-center">
              <h3 className="text-2xl font-bold text-green-700">
                <IoIosCheckmarkCircle className="inline-block" /> Refund request
                submitted successfully
              </h3>
              <p className="mt-4 font-semibold">
                We are processing your request. We will respond as soon as
                possible.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="mx-auto rounded bg-orange-700 p-1 px-4 py-2 text-base font-medium text-white"
                onClick={() => setSuccessPaymentModal(false)}
              >
                OK
              </button>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

export default RefundPage;

const PaymentInformation = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="grid shrink-0 gap-y-4 rounded-lg bg-[#E8E3E3] p-5 shadow-xl shadow-[#e8e3e3]/50">
      <div>
        <p>Project amount: 1500 USD</p>
        <p>Paid Amount: 500 USD</p>
        <p>Left Amount: 1000 USD</p>
        <p>Refund Amount: 500 USD</p>
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

"use client";

import { useState } from "react";
import Card from "../components/Card";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { createPaymentForWallet, createRefund } from "./action";
import { useFormStatus } from "react-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function OrderPage({
  data,
  payDetails,
}: {
  data: any;
  payDetails: any;
}) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [refundPaymentMethod, setRefundPaymentMethod] = useState("");
  const [showCreatePaymentModal, setShowCreatePaymentModal] = useState(false);
  const [successPaymentModal, setSuccessPaymentModal] = useState(false);
  const [successRefundPaymentModal, setSuccessRefundPaymentModal] =
    useState(false);
  const [showRefundForm, setShowRefundForm] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const [amount, setAmount] = useState(0);
  const [refundAmount, setRefundAmount] = useState(0);
  const { pending } = useFormStatus();

  const cardTitles = [
    { title: "Total Orders", number: data?.totalorders },
    { title: "Total project amount", number: 0 },
    { title: "Total project paid", number: 0 },
    { title: "Total amount left", number: 0 },
    { title: "Total pending Orders", number: 0 },
    { title: "Total Waiting orders", number: 0 },
    { title: "Total working orders", number: 0 },
    { title: "total complete orders", number: 0 },
    { title: "total delivery orders", number: 0 },
    { title: "total cancel orders", number: 0 },
  ];

  return (
    <section className="rounded-xl px-6 py-5">
      <header>
        <section className="mb-3 grid grid-cols-4 gap-3">
          {cardTitles.map((obj: { title: string; number: number }, i) => (
            <Card title={obj.title} number={obj.number} key={i} />
          ))}
        </section>

        <section className="flex items-center justify-between">
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
        </section>
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
          {data?.userorders?.length === 0 ? (
            <tr>
              <td colSpan={9} className="py-6 text-2xl">
                There is no available order
              </td>
            </tr>
          ) : (
            data?.userorders?.map((data: any, i: any) => {
              return (
                <tr className="odd:bg-[#FAEFD8] even:bg-white" key={data._id}>
                  <td className="border-r border-r-[#FFB200] py-6">
                    <span className="rounded bg-[#FFB200] px-2 py-1 font-semibold">
                      {i + 1}
                    </span>
                  </td>
                  <td className="border-r border-r-[#FFB200]">{"-"}</td>
                  <td className="border-r border-r-[#FFB200] capitalize">
                    {data.project_type}
                  </td>
                  <td className="border-r border-r-[#FFB200]">{data.budget}</td>
                  <td className="border-r border-r-[#FFB200]">
                    {data.paid_amount}
                  </td>
                  <td className="border-r border-r-[#FFB200]">
                    {data.balance_amount}
                  </td>
                  <td className="border-r border-r-[#FFB200]">
                    <button className="rounded bg-[#FFB200] px-3 py-2 text-sm font-semibold">
                      Update
                    </button>
                  </td>
                  <td className="border-r border-r-[#FFB200]">
                    <button
                      className="rounded bg-[#FF7777] px-3 py-1 capitalize text-white"
                      onClick={() => {
                        data.status === "pending" && setShowPaymentModal(true);
                        data.status === "waiting" && setShowRefundForm(true);
                      }}
                    >
                      {data.status}
                    </button>
                  </td>
                  <td>
                    <Link
                      href={`/dashboard/orders/${data._id}`}
                      className="inline-block rounded bg-[#FFB200] px-3 py-2 text-sm font-semibold uppercase"
                    >
                      View
                    </Link>
                  </td>

                  {showPaymentModal && (
                    <div className="absolute left-0 top-0 h-screen w-screen bg-black/10">
                      <article className="absolute left-1/2 top-1/2 w-3/5 -translate-x-1/2 -translate-y-1/2 bg-white">
                        <header className="border py-5 shadow-lg">
                          <form
                            action={"somthing"}
                            className="flex items-center justify-center gap-x-5"
                          >
                            <div>
                              <label htmlFor="pay_method" className="sr-only">
                                Payment Method
                              </label>
                              <select
                                className="rounded-full border-2 border-[#1497CF] px-4 py-3 text-sm"
                                onChange={(e) =>
                                  setPaymentMethod(e.currentTarget.value)
                                }
                              >
                                <option value="">Payment method</option>
                                <option value="bank">Bank</option>
                                <option value="wallet">Wallet</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor="pay_method" className="sr-only">
                                Select Wallet
                              </label>
                              <select
                                className="rounded-full border-2 border-[#1497CF] px-4 py-3 text-sm capitalize"
                                onChange={(e) =>
                                  setIndex(+e.currentTarget.value)
                                }
                              >
                                <option value="">Select Bank</option>
                                {payDetails.map(
                                  (
                                    obj: { name: string; _id: string },
                                    i: number,
                                  ) => (
                                    <option
                                      value={i}
                                      key={obj._id}
                                      className="capitalize"
                                    >
                                      {obj.name}
                                    </option>
                                  ),
                                )}
                              </select>
                            </div>
                            <div>
                              <label htmlFor="pay_method" className="sr-only">
                                Payment Amount
                              </label>
                              <input
                                className="rounded-full border-2 border-[#1497CF] px-4 py-3 text-sm placeholder:text-black"
                                onChange={(e) =>
                                  setAmount(+e.currentTarget.value)
                                }
                                placeholder="Payment Amount"
                              />
                            </div>
                          </form>
                        </header>

                        <main className="flex items-center justify-between gap-x-10 border px-8 py-6">
                          {index !== null && (
                            <div className="flex grow items-center justify-between gap-x-6">
                              <Image
                                src="/images/payoneer.png"
                                alt="Payoneer icon"
                                width={150}
                                height={80}
                              />
                              <div className="text-left text-sm">
                                <p className="capitalize">
                                  Bank: {payDetails[index].name}
                                </p>
                                <p>Account Name: Parsonal</p>
                                <p>
                                  Account: {payDetails[index].account_info[0]}
                                </p>
                                <p>
                                  Routing: {payDetails[index].account_info[0]}
                                </p>
                              </div>
                              <Image
                                src="/images/qr-code.png"
                                alt="A QR code"
                                width={80}
                                height={80}
                              />
                            </div>
                          )}
                          <div className="justify-self-end">
                            <PaymentInformation
                              data={data}
                              amount={amount}
                              handleClick={() => {
                                setShowPaymentModal(false);
                                setShowCreatePaymentModal(true);
                              }}
                            />
                          </div>
                        </main>

                        <footer>
                          <p className="py-4 text-center text-sm font-semibold text-red-700">
                            Click on continue after you have paid the total
                            amount to the selected bank info provided here
                          </p>
                        </footer>
                      </article>
                    </div>
                  )}

                  {showCreatePaymentModal && (
                    <div className="absolute left-0 top-0 h-screen w-screen bg-black/10">
                      <article className="absolute left-1/2 top-1/2 max-h-[99vh] w-3/5 -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white p-5 text-left">
                        <h2 className="mb-8 text-2xl font-bold">
                          {paymentMethod === "wallet"
                            ? "Enter your Mobile Wallet Information"
                            : "Enter your payment bank account details"}
                        </h2>

                        <div className="flex items-center gap-x-10">
                          <form
                            action={createPaymentForWallet}
                            className="grid grow gap-y-4"
                          >
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
                                name="account_name"
                                className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            </div>

                            <input
                              type="text"
                              id="a"
                              name="amount"
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              value={amount}
                            />

                            <input
                              type="text"
                              id="order_id"
                              name="orderid"
                              value={data._id}
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                            />

                            <input
                              type="text"
                              id="order_id"
                              name="bank_wallet"
                              value={paymentMethod}
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                            />

                            <input
                              type="text"
                              id="bank_id"
                              name="bankid"
                              value={index !== null && payDetails[index]._id}
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                            />

                            <input
                              type="text"
                              id="bank-number"
                              name="bank_number"
                              value={
                                index !== null && payDetails[index].account_info
                              }
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                            />

                            <input
                              type="text"
                              id="bank-name"
                              name="bank_name"
                              value={index !== null && payDetails[index].name}
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                            />

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
                                name="account_name"
                                className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="an"
                                className="mb-1 block text-sm font-medium"
                              >
                                Account Number
                              </label>
                              <input
                                type="text"
                                id="an"
                                name="account_number"
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
                                name="transaction_id"
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
                                type="file"
                                id="tr"
                                name="transaction_receipt"
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
                                name="additional_note"
                                className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            </div>
                            <div className="flex items-center gap-x-4">
                              <input
                                type="checkbox"
                                checked
                                id="tac"
                                required
                              />
                              <label htmlFor="tac">
                                I agree with the terms and condition
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="rounded-lg bg-[#3C5A99] py-3 text-white"
                            >
                              {pending
                                ? "Confirming payment ..."
                                : "Confirm Payment"}
                            </button>
                          </form>
                          <div>
                            <h2 className="mb-2 text-center text-xl font-bold">
                              Payment Processing
                            </h2>
                            <PaymentInformation
                              data={data}
                              amount={amount}
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
                    <div className="absolute left-0 top-0 h-screen w-screen bg-black/10">
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

                  {showRefundForm && (
                    <div className="absolute left-0 top-0 h-screen w-screen bg-black/10">
                      <article className="no-scrollbar absolute left-1/2 top-1/2 max-h-[95vh] w-3/5 -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-white text-left">
                        <form className="mb-10 flex items-center justify-center gap-x-5 py-5 shadow-xl">
                          <div>
                            <select
                              className="rounded-full border-2 border-[#1497CF] px-4 py-3 text-sm"
                              onChange={(e) =>
                                setRefundPaymentMethod(e.currentTarget.value)
                              }
                            >
                              <option value="">Refund method</option>
                              <option value="bank">Bank</option>
                              <option value="wallet">Wallet</option>
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
                              onChange={(e) =>
                                setRefundAmount(+e.currentTarget.value)
                              }
                              placeholder="Refund Amount"
                            />
                          </div>
                        </form>

                        <h2 className="mb-8 px-5 text-2xl font-bold">
                          Enter your payment refund Information
                        </h2>

                        <div className="mb-10 flex items-center gap-x-10 px-5">
                          <form
                            action={createRefund}
                            className="grid grow gap-y-4"
                          >
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
                                name="account_name"
                                className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            </div>

                            <input
                              type="text"
                              id="order_id"
                              name="orderid"
                              value={data._id}
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                            />
                            <input
                              type="text"
                              id="order_id"
                              name="bank_wallet"
                              value={refundPaymentMethod}
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                            />
                            <input
                              type="text"
                              id="order_id"
                              name="amount"
                              value={refundAmount}
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                            />

                            <input
                              type="text"
                              id="order_id"
                              name="transaction_receipt"
                              value={""}
                              className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                            />
                            <div>
                              <label
                                htmlFor="mwn"
                                className="mb-1 block text-sm font-medium"
                              >
                                {refundPaymentMethod === "bank"
                                  ? "Receipient's Bank Name"
                                  : "Receipient's E-wallet Name"}
                              </label>
                              <input
                                type="text"
                                id="mwn"
                                name="bank_name"
                                className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="an"
                                className="mb-1 block text-sm font-medium"
                              >
                                {refundPaymentMethod === "bank"
                                  ? " Receipient's Bank Account Numer"
                                  : " Receipient's E-wallet Account Numer"}
                              </label>
                              <input
                                type="text"
                                id="an"
                                name="account_number"
                                className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            </div>
                            {refundPaymentMethod === "bank" ? (
                              <div>
                                <label
                                  htmlFor="tid"
                                  className="mb-1 block text-sm font-medium"
                                >
                                  Receipient&apos;s Bank Routing Numer
                                </label>
                                <input
                                  type="text"
                                  name="routing_number"
                                  id="tid"
                                  className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                                />
                              </div>
                            ) : (
                              <input
                                type="text"
                                id="bank-name"
                                name="routing_number"
                                value={"****"}
                                className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            )}
                            {refundPaymentMethod === "bank" ? (
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
                                  name="code"
                                  className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                                />
                              </div>
                            ) : (
                              <input
                                type="text"
                                id="bank-name"
                                name="code"
                                value={"***"}
                                className="border-[#00000026 hidden w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            )}
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
                                name="reason"
                                className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="adi"
                                className="mb-1 block text-sm font-medium"
                              >
                                Currency
                              </label>
                              <input
                                type="text"
                                id="adi"
                                name="currency"
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
                                name="additional_note"
                                className="border-[#00000026 w-full rounded-lg border bg-[#D9D9D91A] px-4 py-3 text-sm"
                              />
                            </div>

                            <div className="flex items-center gap-x-4">
                              <input type="checkbox" checked id="tac" />
                              <label htmlFor="tac">
                                I agree with the terms and condition
                              </label>
                            </div>
                            <button className="rounded-lg bg-[#3C5A99] py-3 text-white">
                              {pending
                                ? "Sending request ..."
                                : "Ask for Refund"}
                            </button>
                          </form>
                          <div>
                            <h2 className="mb-2 text-center text-xl font-bold">
                              Refund Processing
                            </h2>
                            <RefundPaymentInformation
                              refundAmount={refundAmount}
                              data={data}
                              handleClick={() => {
                                setShowRefundForm(false);
                                setSuccessRefundPaymentModal(true);
                              }}
                            />
                          </div>
                        </div>
                      </article>
                    </div>
                  )}

                  {successRefundPaymentModal && (
                    <div className="absolute left-0 top-0 h-screen w-screen bg-black/10">
                      <article className="absolute left-1/2 top-1/2 max-h-[90vh] w-full max-w-[450px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-5">
                        <div className="mb-6 grid gap-y-0.5 px-4 text-center">
                          <h3 className="text-2xl font-bold text-green-700">
                            <IoIosCheckmarkCircle className="inline-block" />{" "}
                            Refund request submitted successfully
                          </h3>
                          <p className="mt-4 font-semibold">
                            We are processing your request. We will respond as
                            soon as possible.
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <button
                            className="mx-auto rounded bg-orange-700 p-1 px-4 py-2 text-base font-medium text-white"
                            onClick={() => setSuccessRefundPaymentModal(false)}
                          >
                            OK
                          </button>
                        </div>
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

const PaymentInformation = ({
  handleClick,
  data,
  amount,
}: {
  handleClick: () => void;
  data: any;
  amount: number;
}) => {
  return (
    <div className="grid shrink-0 gap-y-4 rounded-lg bg-[#E8E3E3] p-5 text-left shadow-xl shadow-[#e8e3e3]/50">
      <div>
        <p>Project amount: {data.budget} USD</p>
        <p>Paid Amount: {data.paid_amount} USD</p>
        <p>Left Amount: {data.balance_amount} USD</p>
      </div>

      <div>
        <p>Pay Amount: {amount} USD</p>
        <p>VAT(2%): 10</p>
        <p>Total: {amount + 10} USD</p>
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

const RefundPaymentInformation = ({
  refundAmount,
  data,
  handleClick,
}: {
  refundAmount: number;
  data: any;
  handleClick: () => void;
}) => {
  return (
    <div className="grid shrink-0 gap-y-4 rounded-lg bg-[#E8E3E3] p-5 shadow-xl shadow-[#e8e3e3]/50">
      <div>
        <p>Project amount: {data.budget} USD</p>
        <p>Paid Amount: {data.paid_amount} USD</p>
        <p>Left Amount: {data.balance_amount} USD</p>
        <p>Refund Amount: {refundAmount ? refundAmount : 0} USD</p>
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

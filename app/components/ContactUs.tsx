"use client";

import Image from "next/image";
import { useState } from "react";
import { contactUs } from "../(landing-pages)/action";
import { IoLocationOutline, IoPersonOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhoneAndroid, MdOutlineTitle } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";

export default function ContactUs() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Image
        src={"/icons/chat.png"}
        alt="Chat bot icon"
        width={70}
        height={70}
        className="mb-4 inline-block"
        onClick={() => setModalOpen(true)}
      />

      {isModalOpen && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
          <article className="no-scrollbar relative mx-auto max-h-screen w-4/5 max-w-[1140px] overflow-y-auto bg-orange-100 px-40 py-10">
            <h2 className="text-center text-2xl font-bold text-black">
              CONTACT US
            </h2>

            <button
              className="absolute right-5 top-5 text-3xl text-red-500"
              onClick={() => setModalOpen(false)}
            >
              <IoIosCloseCircle />
            </button>

            <div className="relative mt-5 bg-orange-600 p-10">
              <div className="mb-4 text-white">
                <h3 className="text-xl font-bold">SEND US A MESSAGE</h3>
                <p>Feel some love, to see what we can do...</p>
              </div>

              <form action={contactUs} className="grid gap-y-4">
                <Input name="name" label="Name">
                  children=
                  <IoPersonOutline className="text-xl" />
                </Input>

                <Input name="email" label="Email">
                  children=
                  <AiOutlineMail className="text-xl" />
                </Input>

                <Input name="subject" label="Subject">
                  children=
                  <MdOutlineTitle className="text-xl" />
                </Input>

                <div className="relative max-w-[480px]">
                  <textarea
                    className="w-full resize-none bg-white px-4 py-4 pr-12"
                    name="message"
                    placeholder="Message"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 border-l-2 border-gray-400 pl-1">
                    <LuMessageCircle className="text-xl" />
                  </div>
                </div>
                <button className="w-fit bg-black px-4 py-3 text-sm font-semibold text-white">
                  SEND MESSAGE
                </button>
              </form>

              <div className="absolute -right-20 top-1/2 w-fit -translate-y-1/2 bg-black p-10 text-white">
                <h3 className="text-xl font-bold">INFORMATION</h3>
                <div className="flex gap-x-4 border-b border-b-white py-4">
                  <div className="flex items-center justify-center bg-orange-600 px-3 text-2xl">
                    <MdOutlinePhoneAndroid />
                  </div>
                  <div>
                    <h3 className="items-center font-semibold">Phone No.</h3>
                    <p>+254 (98) 2156213</p>
                  </div>
                </div>
                <div className="flex gap-x-4 border-b border-b-white py-4">
                  <div className="flex items-center justify-center bg-orange-600 px-3 text-2xl">
                    <HiOutlineMail />
                  </div>
                  <div>
                    <h3 className="items-center font-semibold">
                      Email Address
                    </h3>
                    <p>username@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-x-4 py-4">
                  <div className="flex items-center justify-center bg-orange-600 px-3 text-2xl">
                    <IoLocationOutline />
                  </div>
                  <div>
                    <address>
                      380 St Kilda Road, Jackson <br /> New Store, United State
                    </address>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-4 gap-x-4 text-white">
                  <div className="flex items-center justify-center bg-orange-600 px-3 py-3 text-2xl">
                    <FaFacebook />
                  </div>
                  <div className="flex items-center justify-center bg-orange-600 px-3 py-3 text-2xl">
                    <FaXTwitter />
                  </div>
                  <div className="flex items-center justify-center bg-orange-600 px-3 py-3 text-2xl">
                    <FaLinkedinIn />
                  </div>
                  <div className="flex items-center justify-center bg-orange-600 px-3 py-3 text-2xl">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}

const Input = ({
  name,
  label,
  children,
}: {
  name: string;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative max-w-[480px]">
      <input
        type="text"
        className="w-full bg-white px-4 py-4 pr-12"
        name={name}
        placeholder={label}
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 border-l-2 border-gray-400 pl-1">
        {children}
      </div>
    </div>
  );
};

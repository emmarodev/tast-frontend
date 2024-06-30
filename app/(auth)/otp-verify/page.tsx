"use client";

import OTPForm from "./components/otp-form";

function Verification() {
  const email = localStorage.getItem("email");

  return (
    <section className="text-center">
      <header className="mb-10">
        <h1 className="text-2xl font-extrabold lg:text-4xl 2xl:text-[80px] 2xl:leading-[97.52px] mb-[13px]">
          Enter Verification Code!
        </h1>
        <p className="sm:text-[18px] 2xl:text-[25px]">
          We have sent a 4 digit verification code on{" "}
          <span className="font-bold flex justify-center items-center gap-x-2">
            {email}
            <div className="w-4 h-4 bg-[#004485] rounded-full" />
          </span>
        </p>
      </header>

      <main>
        <OTPForm />
      </main>
    </section>
  );
}

export default Verification;
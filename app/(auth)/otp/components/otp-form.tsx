"use client";

import { Form, Formik } from "formik";
import Link from "next/link";

function OTPForm() {
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={{}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className="flex justify-center  sm:gap-x-6 2xl:gap-x-[3.063rem] max-w-[714px] mx-auto">
          <input
            type="text"
            className="rounded-40 py-4 px-6 text-xl font-extrabold focus:bg-[#CDEEFF80] focus:border-[#0077B6] bg-[#2F2F2F1A] w-[70px] 2xl:w-[120px] 2xl:py-10 text-center rounded-xl focus:outline-none focus:border"
          />
          <input
            type="text"
            className="rounded-40 py-4 px-6 text-xl font-extrabold focus:bg-[#CDEEFF80] focus:border-[#0077B6] bg-[#2F2F2F1A] w-[70px] 2xl:w-[120px] 2xl:py-10 rounded-xl text-center focus:outline-none focus:border"
          />
          <input
            type="text"
            className="rounded-40 py-4 px-6 text-xl font-extrabold focus:bg-[#CDEEFF80] focus:border-[#0077B6] bg-[#2F2F2F1A] w-[70px] 2xl:w-[120px] py-6px rounded-xl text-center focus:outline-none focus:border"
          />
          <input
            type="text"
            className="rounded-40 py-4 px-6 text-xl font-extrabold focus:bg-[#CDEEFF80] focus:border-[#0077B6] bg-[#2F2F2F1A] w-[70px] 2xl:w-[120px] py-6px rounded-xl text-center focus:outline-none focus:border"
          />
        </div>

        <div className="flex flex-col items-center gap-y-2 justify-center 2xl:mt-[6.063rem] mt-12">
          <Link href="">
            <button
              type="submit"
              className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-16 py-4 2xl:leading-[3.429rem] font-extrabold"
            >
              Verify
            </button>
          </Link>

          <p>
            Didn’t receive code?{" "}
            <button className="font-bold">Resend Again</button>.{" "}
          </p>
        </div>
      </Form>
    </Formik>
  );
}

export default OTPForm;

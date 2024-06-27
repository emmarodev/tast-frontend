"use client";

import { Form, Formik } from "formik";
import TextInput from "../../components/TextInput";
import Link from "next/link";

function ForgotPasswordForm() {
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
        <div className="flex flex-col gap-y-[3.063rem]">
          <TextInput label="Email" name="email" icon="./icons/message.svg" />
        </div>

        <div className="flex justify-center mt-[2.625rem] 2xl:mt-[6rem]">
          <Link href="/otp">
            <button
              type="submit"
              className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold"
            >
              Reset
            </button>
          </Link>
        </div>
      </Form>
    </Formik>
  );
}

export default ForgotPasswordForm;

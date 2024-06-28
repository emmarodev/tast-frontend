"use client";

import { Form, Formik } from "formik";
import TextInput from "../../components/TextInput";
import Link from "next/link";

function SignUpForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={{}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div className="flex flex-col sm:gap-y-6 2xl:gap-y-[3.063rem]">
          <TextInput
            label="Username"
            name="username"
            placeholder="Username"
            icon="./icons/profile.svg"
            type="text"
          />
          <TextInput
            label="Email"
            name="email"
            icon="./icons/message.svg"
            placeholder="email"
            type="text"
          />
          <div>
            <TextInput
              label="Password"
              name="password"
              type="password"
              icon="./icons/password-check.svg"
              placeholder="password"
            />
            <p className="text-xs 2xl:text-base pl-4 mt-1">
              Password should be at least 8 character long.
            </p>
          </div>
        </div>

        <div className="flex justify-center 2xl:mt-[2.625rem] mt-5 text-center">
          <Link href="/otp">
            <button
              type="submit"
              className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </Form>
    </Formik>
  );
}

export default SignUpForm;

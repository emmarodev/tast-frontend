"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../components/TextInput";

function LoginForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
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
        <div className="flex flex-col gap-y-8 2xl:gap-y-[3.063rem]">
          <TextInput
            label="Username"
            name="username"
            icon="./icons/profile.svg"
          />
          <TextInput
            label="Password"
            name="password"
            icon="./icons/password-check.svg"
          />
        </div>
        <div className="flex justify-between mt-2 px-5 text-sm">
          <p className="text-[#0077B6]">Forgot Password?</p>
          <div className="flex gap-x-1">
            <input type="checkbox" id="recall" />
            <label htmlFor="recall">Remember Me</label>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-[2.625rem]">
          <button
            type="submit"
            className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold"
          >
            Sign In
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default LoginForm;

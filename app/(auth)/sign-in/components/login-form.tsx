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
        <div className="flex flex-col gap-y-[3.063rem]">
          <TextInput label="Username" name="username" icon="./icons/profile.svg"/>
          <TextInput label="Password" name="password" icon="./icons/password-check.svg"/>
        </div>

        <div className="flex justify-center mt-[2.625rem]">
          <button
            type="submit"
            className="bg-[#0077B6] text-white rounded-[30px] px-[5.813rem] py-[1.688rem] text-[2.813rem] leading-[3.429rem] font-extrabold"
          >
            Sign In
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default LoginForm;

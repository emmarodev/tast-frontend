"use client";

import { Form, Formik } from "formik";
import TextInput from "../../components/TextInput";

function CreateNewPassword() {
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
        <div className="flex flex-col 2xl:gap-y-[3.063rem] gap-y-10">
          <TextInput
            label="New Password"
            name="newPassword"
            icon="./icons/password-check.svg"
          />
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            icon="./icons/password-check.svg"
          />
        </div>

        <div className="flex justify-center 2xl:mt-[6.063rem] mt-[2rem]">
          <button
            type="submit"
            className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold"
          >
            Continue
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default CreateNewPassword;

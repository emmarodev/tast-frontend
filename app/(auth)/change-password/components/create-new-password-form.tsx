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
        <div className="flex flex-col gap-y-[3.063rem]">
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

        <div className="flex justify-center mt-[6.063rem]">
          <button
            type="submit"
            className="bg-[#0077B6] text-white rounded-[30px] px-[5.813rem] py-[1.688rem] text-[2.813rem] leading-[3.429rem] font-extrabold"
          >
            Continue
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default CreateNewPassword;

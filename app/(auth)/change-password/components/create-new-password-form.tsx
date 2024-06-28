"use client";

import { Form, Formik } from "formik";
import TextInput from "../../components/TextInput";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ChangePasswordFormValidationSchema } from "../lib/validate";
import { useState } from "react";
import { useRouter } from "next/navigation";

function CreateNewPassword() {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");

  return (
    <Formik
      initialValues={{
        newpassword: "",
        currentpassword: "",
      }}
      validationSchema={toFormikValidationSchema(
        ChangePasswordFormValidationSchema
      )}
      onSubmit={async (values, { setSubmitting }) => {
        const mail = localStorage.getItem("email");
        const newValues = { ...values, email: mail };

        await fetch("https://tast-pwvf.onrender.com/user/reset/password", {
          method: "POST",
          body: JSON.stringify(newValues),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((res) =>
          res.json().then((data) => {
            console.log(data);

            if (data.status && data.status_code === 200) {
              router.push("/success-password");
            } else {
              setErrMsg(data.message);
            }
          })
        );

        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col 2xl:gap-y-[3.063rem] gap-y-10">
            <TextInput
              label="Current Password"
              name="currentpassword"
              type="password"
              icon="./icons/password-check.svg"
              placeholder="password"
            />
            <TextInput
              label="New Password"
              name="newpassword"
              type="password"
              icon="./icons/password-check.svg"
              placeholder="password"
            />
          </div>

          <div className="flex justify-center 2xl:mt-[6.063rem] mt-[2rem]">
            <button
              type="submit"
              className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold"
            >
              {isSubmitting ? "Waiting..." : "Continue"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateNewPassword;

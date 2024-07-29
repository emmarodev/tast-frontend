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
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Formik
      initialValues={{
        newpassword: "",
        currentpassword: "",
      }}
      validationSchema={toFormikValidationSchema(
        ChangePasswordFormValidationSchema
      )}
      onSubmit={async (values) => {
        const mail = localStorage.getItem("email");
        const newValues = { ...values, email: mail };

        setIsSubmitting(true);

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

            setIsSubmitting(false);
          })
        );
      }}
    >
      <Form>
        {errMsg && <p className="mb-2 text-red-500">{errMsg}</p>}
        <div className="flex flex-gap-y-[3.063rem] gap-y-10">
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

        <div className="flex justify-center mt-[6.063rem] mt-[2rem]">
          <button
            type="submit"
            className="bg-[#0077B6] text-white rounded-[30px] px-[5.813rem] py-[1.688rem] text-2xl text-xl px-10 py-4 leading-[3.429rem] font-extrabold"
          >
            {isSubmitting ? "Waiting..." : "Continue"}
          </button>
        </div>
      </Form>
    </Formik>
  );
}

export default CreateNewPassword;

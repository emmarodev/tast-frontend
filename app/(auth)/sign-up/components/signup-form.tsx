"use client";

import { Form, Formik } from "formik";
import TextInput from "../../components/TextInput";
import { SignUpFormValidationSchema } from "../lib/validate";
import { toFormikValidationSchema } from "zod-formik-adapter";

import { useState } from "react";
import { useRouter } from "next/navigation";

function SignUpForm() {
  const router = useRouter();
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={toFormikValidationSchema(SignUpFormValidationSchema)}
      onSubmit={async (values, { setSubmitting }) => {
        setIsSubmitting(true);
        fetch("https://tast-pwvf.onrender.com/user/signup", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }).then((res) =>
          res.json().then((data) => {
            console.log(data);

            if (data.status && data.status_code === 200) {
              router.push("/otp");
            } else {
              setErrMsg(data.message);
            }
            setIsSubmitting(false);
          })
        );

      }}
    >
     
        <Form>
          {errMsg && <p className="text-center mb-2 text-red-500">{errMsg}</p>}

          <div className="flex flex-col sm:gap-y-6 2xl:gap-y-[3.063rem]">
            <TextInput
              label="Username"
              name="name"
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
              <p className="text-xs .2xl:text-base pl-4 mt-1">
                Password should be at least 8 character long.
              </p>
            </div>
          </div>

          <div className="flex justify-center 2xl:mt-[2.625rem] mt-5 text-center">
            <button
              type="submit"
              className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold"
            >
              {isSubmitting ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </Form>
    
    </Formik>
  );
}

export default SignUpForm;

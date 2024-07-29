"use client";

import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import {
  EditCompanyInfoFormValidationSchema,
  EditPersonalInfoFormValidationSchema,
  EditPresentAddressFormValidationSchema,
} from "./validate";
import TextInput from "./components/TextInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProfile() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitting2, setIsSubmitting2] = useState(false);
  const [isSubmitting3, setIsSubmitting3] = useState(false);
  const [isSubmitting4, setIsSubmitting4] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("token") || "";
    setUserId(value);
  }, []);

  return (
    <section className="bg-[#F2E6C9] rounded-xl py-5 px-6">
      <ToastContainer />
      <header className="flex justify-between items-end mb-4">
        <div className="flex items-end gap-x-4">
          <div className="h-16 w-16 rounded-full border border-black" />
          <div>
            <h3 className="font-semibold">Mr. Jack</h3>
            <p className="text-sm">Username: Jack1542</p>
          </div>
        </div>
      </header>
      <main className="flex gap-x-2 items-start">
        <section className="w-1/2 grid gap-y-2">
          <section className="bg-white rounded-lg py-4">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Personal Information
            </h2>
            <Formik
              initialValues={{
                name: "",
                occupation: "",
                language: "",
                dob: "",
                email: "",
                phone: "",
                identification: "",
              }}
              validationSchema={toFormikValidationSchema(
                EditPersonalInfoFormValidationSchema
              )}
              onSubmit={async (values) => {
                const { language, ...remaining } = values;
                const newValues = {
                  ...remaining,
                  userid: userId,
                  language: language.split(","),
                };

                setIsSubmitting(true);

                await fetch(
                  "https://tast-pwvf.onrender.com/user/update/details",
                  {
                    method: "POST",
                    body: JSON.stringify(newValues),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8",
                    },
                  }
                ).then((res) =>
                  res.json().then((data) => {
                    console.log(data);

                    if (data.status && data.status_code === 200) {
                      toast.success("Your personal details have been updated");
                    } else {
                      setErrMsg(data.message);
                    }

                    setIsSubmitting(false);
                  })
                );
              }}
            >
              <Form>
                {errMsg && (
                  <p className="mb-2 text-red-500 text-center text-sm">
                    {errMsg}
                  </p>
                )}
                <div className="flex flex-col gap-y-2">
                  <TextInput
                    label="Full Name"
                    name="name"
                    type="text"
                    placeholder=""
                  />
                  <TextInput
                    label="Occupation"
                    name="occupation"
                    type="text"
                    placeholder=""
                  />
                  <div>
                    <TextInput
                      label="Speaking Language"
                      name="language"
                      type="text"
                      placeholder=""
                    />
                    <p className="text-[10px] font-semibold pr-4 text-right">
                      Eg: English, German
                    </p>
                  </div>
                  <TextInput
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    placeholder=""
                  />
                  <TextInput
                    label="National Identification Number/Passport Number"
                    name="identification"
                    type="text"
                    placeholder=""
                  />
                  <TextInput
                    label="Phone No"
                    name="phone"
                    type="tel"
                    placeholder=""
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="flex justify-center mt-[2rem]">
                  <button
                    type="submit"
                    className="bg-[#0077B6] text-white rounded-[30px] px-10 py-1 font-medium text-base"
                  >
                    {isSubmitting ? "Sending Update..." : "Edit"}
                  </button>
                </div>
              </Form>
            </Formik>
          </section>
          <section className="bg-white rounded-lg py-4">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Company Information
            </h2>
            <Formik
              initialValues={{
                company_name: "",
                phone: "",
                email: "",
                website_url: "",
              }}
              validationSchema={toFormikValidationSchema(
                EditCompanyInfoFormValidationSchema
              )}
              onSubmit={async (values) => {
                const newValues = {
                  ...values,
                  userid: userId,
                };

                setIsSubmitting2(true);

                await fetch(
                  "https://tast-pwvf.onrender.com/user/update/company/info",
                  {
                    method: "POST",
                    body: JSON.stringify(newValues),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8",
                    },
                  }
                ).then((res) =>
                  res.json().then((data) => {
                    console.log(data);

                    if (data.status && data.status_code === 200) {
                      toast.success("Your permanent address have been updated");
                    } else {
                      setErrMsg(data.message);
                    }

                    setIsSubmitting2(false);
                  })
                );
              }}
            >
              <Form>
                {errMsg && (
                  <p className="mb-2 text-red-500 text-center text-sm">
                    {errMsg}
                  </p>
                )}
                <div className="flex flex-col gap-y-2">
                  <TextInput
                    label="Company Name"
                    name="country_name"
                    type="text"
                    placeholder=""
                  />
                  <TextInput
                    label="Phone No."
                    name="phone"
                    type="text"
                    placeholder=""
                  />

                  <TextInput
                    label="email"
                    name="email"
                    type="text"
                    placeholder=""
                  />

                  <TextInput
                    label="Website Url"
                    name="website_url"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="flex justify-center mt-[2rem]">
                  <button
                    type="submit"
                    className="bg-[#0077B6] text-white rounded-[30px]  px-10 py-1 font-medium text-base"
                  >
                    {isSubmitting2 ? "Sending Update..." : "Edit"}
                  </button>
                </div>
              </Form>
            </Formik>
          </section>
        </section>

        <section className="w-1/2 grid gap-y-2">
          <section className="bg-white rounded-lg py-4">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Present Address
            </h2>
            <Formik
              initialValues={{
                state: "",
                city: "",
                country: "",
                postalzone: "",
              }}
              validationSchema={toFormikValidationSchema(
                EditPresentAddressFormValidationSchema
              )}
              onSubmit={async (values) => {
                const newValues = {
                  ...values,
                  userid: userId,
                };

                setIsSubmitting3(true);

                await fetch(
                  "https://tast-pwvf.onrender.com/user/update/present/address",
                  {
                    method: "POST",
                    body: JSON.stringify(newValues),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8",
                    },
                  }
                ).then((res) =>
                  res.json().then((data) => {
                    console.log(data);

                    if (data.status && data.status_code === 200) {
                      toast.success("Your present address have been updated");
                    } else {
                      setErrMsg(data.message);
                    }

                    setIsSubmitting3(false);
                  })
                );
              }}
            >
              <Form>
                {errMsg && (
                  <p className="mb-2 text-red-500 text-center text-sm">
                    {errMsg}
                  </p>
                )}
                <div className="flex flex-col gap-y-2">
                  <TextInput
                    label="Country"
                    name="country"
                    type="text"
                    placeholder=""
                  />
                  <TextInput
                    label="City"
                    name="city"
                    type="text"
                    placeholder=""
                  />

                  <TextInput
                    label="State/Province"
                    name="state"
                    type="text"
                    placeholder=""
                  />

                  <TextInput
                    label="Postal Zone/ZIP Code"
                    name="postalzone"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="flex justify-center  mt-[2rem]">
                  <button
                    type="submit"
                    className="bg-[#0077B6] text-white rounded-[30px] px-10 py-1 font-medium text-base"
                  >
                    {isSubmitting3 ? "Sending Update..." : "Edit"}
                  </button>
                </div>
              </Form>
            </Formik>
          </section>
          <section className="bg-white rounded-lg py-4">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Permanent Address
            </h2>
            <Formik
              initialValues={{
                state: "",
                city: "",
                country: "",
                postalzone: "",
              }}
              validationSchema={toFormikValidationSchema(
                EditPresentAddressFormValidationSchema
              )}
              onSubmit={async (values) => {
                const newValues = {
                  ...values,
                  userid: userId,
                };

                setIsSubmitting4(true);

                await fetch(
                  "https://tast-pwvf.onrender.com/user/update/permanent/address",
                  {
                    method: "POST",
                    body: JSON.stringify(newValues),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8",
                    },
                  }
                ).then((res) =>
                  res.json().then((data) => {
                    console.log(data);

                    if (data.status && data.status_code === 200) {
                      toast.success("Your permanent address have been updated");
                    } else {
                      setErrMsg(data.message);
                    }

                    setIsSubmitting4(false);
                  })
                );
              }}
            >
              <Form>
                {errMsg && (
                  <p className="mb-2 text-red-500 text-center text-sm">
                    {errMsg}
                  </p>
                )}
                <div className="flex flex-col gap-y-2">
                  <TextInput
                    label="Country"
                    name="country"
                    type="text"
                    placeholder=""
                  />
                  <TextInput
                    label="City"
                    name="city"
                    type="text"
                    placeholder=""
                  />

                  <TextInput
                    label="State/Province"
                    name="state"
                    type="text"
                    placeholder=""
                  />

                  <TextInput
                    label="Postal Zone/ZIP Code"
                    name="postalzone"
                    type="text"
                    placeholder=""
                  />
                </div>

                <div className="flex justify-center mt-[2rem]">
                  <button
                    type="submit"
                    className="bg-[#0077B6] text-white rounded-[30px] px-10 py-1 font-medium text-base"
                  >
                    {isSubmitting4 ? "Sending Update..." : "Edit"}
                  </button>
                </div>
              </Form>
            </Formik>
          </section>
        </section>
      </main>
    </section>
  );
}

export default EditProfile;

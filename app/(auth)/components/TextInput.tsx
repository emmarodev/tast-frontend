"use client";

import { FieldConfig, useField } from "formik";
import { useState } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type Props = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<any> & { label: string; classname?: string };

function TextInput({ label, classname, type, ...props }: Props) {
  const [field, meta] = useField(props);
  const [visibility, setVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="group relative ">
      <label
        htmlFor={props.name}
        className="font-medium text-[30px] leading-[36.57px] absolute top-1/2 -translate-y-1/2 left-[5.938rem]"
      >
        {label}
      </label>
      <input className=" w-full rounded-[40px] bg-[#2F2F2F1A] py-7 px-6" />
    </div>
  );
}

export default TextInput;

"use client";

import { FieldConfig, useField } from "formik";
import Image from "next/image";
import { useState } from "react";

type Props = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<any> & { label: string; classname?: string; icon: string };

function TextInput({ label, classname, type, icon, ...props }: Props) {
  const [field, meta] = useField(props);
  const [visibility, setVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="group relative">
      <div className="z-0">
        <span className="absolute left-6 top-1/2 -translate-y-1/2">
          <Image alt="Icon" src={icon} width={25} height={25} />
        </span>
        <label
          htmlFor={props.name}
          className="font-medium sm:text-lg 2xl:text-[30px absolute top-1/2 -translate-y-1/2 2xl:left-[5.938rem] left-[59px] group-hover:top-0 group-hover:leading-0 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-[#CDEEFF80] group-hover:px-2 group-hover:left-[50px]"
        >
          {label}
        </label>
      </div>

      <input className="w-full rounded-[40px] bg-[#2F2F2F1A] py-7 px-6 pl-[60px] z-10" />
    </div>
  );
}

export default TextInput;

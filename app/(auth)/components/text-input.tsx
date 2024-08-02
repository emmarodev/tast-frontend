"use client";

import Image from "next/image";
import { ComponentProps } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import useShowPassword from "../sign-in/useShowPassword";

type TextInputProps = ComponentProps<"input"> & {
  label: string;
  icon: string;
  name: string;
  errors?: Record<string, string[]>;
};

export default function TextInput({
  name,
  icon,
  label,
  errors,
  ...props
}: TextInputProps) {
  const { isVisible, toggleVisibility } = useShowPassword();

  const hasError = errors && errors[name]?.length > 0;
  const errorMessage = hasError ? errors[name][0] : "";

  return (
    <article>
      <div className="relative w-full">
        <Image
          alt="Icon"
          src={icon}
          width={40}
          height={40}
          className="absolute left-6 top-1/2 -translate-y-1/2"
        />
        {props.type === "password" && (
          <button
            type="button"
            className="absolute right-6 top-1/2 -translate-y-1/2"
            onClick={() => toggleVisibility()}
          >
            {isVisible ? (
              <IoEyeOffOutline className="h-6 w-6" />
            ) : (
              <IoEyeOutline className="h-6 w-6" />
            )}
          </button>
        )}

        <input
          type={props.type === "password" && isVisible ? "text" : props.type}
          id={name}
          name={name}
          {...props}
          className={`peer w-full rounded-[25px] border-2 bg-[#2F2F2F1A] py-5 pl-20 pr-6 transition-colors duration-150 hover:border-[#0077B6] hover:bg-[#CDEEFF80] focus:border-[#0077B6] focus:bg-[#CDEEFF80] focus:outline-none ${
            hasError ? "border-red-500" : "border-transparent"
          } `}
        />
        <label
          htmlFor={name}
          className={`pointer-events-none absolute -top-2 left-[60px] bg-white px-2 font-medium leading-none transition-all duration-300 peer-placeholder-shown:left-20 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-placeholder-shown:py-0 peer-focus:-top-0 peer-focus:left-[60px] peer-focus:bg-white peer-focus:px-2 peer-focus:text-[#0077B6]`}
        >
          {label}
        </label>
      </div>

      {hasError && <p className="mt-1 text-sm text-red-600">{errorMessage}</p>}
    </article>
  );
}

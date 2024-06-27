"use client";

import { FieldConfig, useField } from "formik";
import { useState } from "react";

type Props = React.ClassAttributes<HTMLInputElement> &
  React.InputHTMLAttributes<HTMLInputElement> &
  FieldConfig<any> & { label: string; classname?: string; icon: string };

function TextInput({ label, classname, type, icon, ...props }: Props) {
  const [field, meta] = useField(props);
  const [visibility, setVisibility] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="relative">
      <input
        {...field}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(!!field.value)}
        className={`peer border-b-2 border-gray-300 focus:border-blue-500 outline-none w-full py-2 bg-transparent`}
      />
      <label
        className={`absolute left-0 px-2 text-gray-600 text-sm transform transition-all duration-200 ease-in-out bg-white ${
          isFocused || field.value ? "-top-3.5 scale-75" : "top-2 scale-100"
        }`}
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default TextInput;

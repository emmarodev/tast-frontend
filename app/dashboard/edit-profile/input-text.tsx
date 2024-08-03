import { ComponentProps } from "react";

type TextInputProps = ComponentProps<"input"> & {
  label: string;
  name: string;
  optional?: boolean;
};

export default function TextInput({
  name,
  type,
  label,
  optional,
  ...props
}: TextInputProps) {
  return (
    <>
      <div className="border-b border-b-[#373535]/50 px-4 pb-1 font-semibold last:border-b-0 last:pb-0">
        <div className="flex items-end justify-between">
          <label htmlFor={name} className="w-3/5 text-sm text-[#373535]">
            {label}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            className="w-2/5 rounded-md border px-2 py-2 text-sm focus:border-blue-500 focus:outline-none"
            {...props}
          />
        </div>
        {optional && (
          <p className="mt-0.5 text-right text-[10px] font-semibold">
            Separate language with a{" "}
            <span className="text-[11px] font-bold">&apos;,&apos;</span> Eg: German,
            English
          </p>
        )}
      </div>
    </>
  );
}

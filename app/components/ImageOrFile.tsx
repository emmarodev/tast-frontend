"use client";

import { useRef, useState } from "react";

export default function ImageOrFile() {
  const [type, setType] = useState("file");
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="h-[135px] w-[280px]">
      <div className="mb-1 flex gap-x-2 text-sm">
        <button
          className="rounded border bg-gray-100 px-2 py-1 font-semibold"
          onClick={() => setType("file")}
          type="button"
        >
          Image
        </button>
        <button
          className="rounded border bg-gray-100 px-2 py-1 font-semibold"
          onClick={() => {
            setType("text");
            if (inputRef.current !== null) inputRef.current.focus();
          }}
          type="button"
        >
          Text
        </button>
      </div>
      <div className="flex h-full w-full items-center justify-center rounded border-2 border-[#00000026] bg-[#D9D9D91A]">
        <input
          ref={inputRef}
          type={type}
          name="signature"
          className={`w-4/5 ${type === "file" ? "text-sm" : "text-3xl"} bg-transparent focus:outline-none`}
        />
      </div>
      <p className="mt-2 text-center text-xs">Applicant&apos;s signature</p>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { verifyToken } from "./action";

const OTP_LENGTH = 4;

export default function Page() {
  const searchParams = useSearchParams();
  const verificationType = searchParams.get("verify") as string;

  const formRef = useRef<HTMLFormElement | null>(null);
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array(OTP_LENGTH).fill(null),
  );

  const focusNextInput = (idx: number) => {
    if (idx < inputRefs.current.length - 1) {
      inputRefs.current[idx + 1]?.focus();
      setTimeout(() => {
        inputRefs.current[idx + 1]?.setSelectionRange(1, 1);
      }, 0);
    }
  };

  const focusPrevInput = (idx: number) => {
    if (idx > 0) {
      inputRefs.current[idx - 1]?.focus();
      setTimeout(() => {
        inputRefs.current[idx - 1]?.setSelectionRange(1, 1);
      }, 0);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number,
  ) => {
    if (e.key === "ArrowRight") focusNextInput(idx);
    if (e.key === "ArrowLeft") focusPrevInput(idx);
    if (e.key === "Backspace" && !(e.target as HTMLInputElement).value)
      focusPrevInput(idx);
    if (e.key === "Enter") {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const value = e.target.value;

    if (isNaN(+value)) return;

    // Update the otp state array values
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[idx] = value;
      return newOtp;
    });

    // Focus on next input
    value.trim() && focusNextInput(idx);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const value = e.clipboardData.getData("text");

    if (isNaN(+value)) return;

    const updatedValue = value.split("").slice(0, OTP_LENGTH);
    setOtp(updatedValue);

    inputRefs.current.forEach((input) => input?.blur());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const token = otp.join("");
    const result = await verifyToken(token, verificationType);

    if (result?.message) {
      setErrorMessage(result.message.join(" ")); // Set error message
    }

    setLoading(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="mb-2 text-center text-red-500">{errorMessage}</div>
      )}
      <div className="mx-auto flex w-fit gap-x-4">
        {otp.map((input: string, idx: number) => (
          <input
            key={idx}
            ref={(el) => {
              inputRefs.current[idx] = el;
            }}
            type="text"
            value={input}
            maxLength={1}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            onPaste={(e) => handlePaste(e)}
            className="h-16 w-20 rounded-xl border border-transparent bg-[#2F2F2F1A] text-center text-2xl font-extrabold focus:border-[#0077B6] focus:bg-[#CDEEFF80] focus:outline-none"
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="w-fit rounded-xl bg-[#0077B6] px-10 py-3 text-xl font-bold text-white transition-all duration-150 hover:bg-[#0077B6]/90 disabled:cursor-not-allowed"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </div>
    </form>
  );
}

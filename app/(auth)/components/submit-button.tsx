"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  pendingText,
  text,
}: {
  pendingText: string;
  text: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-fit rounded-xl bg-[#0077B6] px-10 py-3 text-xl font-bold text-white transition-all duration-150 hover:bg-[#0077B6]/90 disabled:cursor-not-allowed"
    >
      {pending ? pendingText : text}
    </button>
  );
}

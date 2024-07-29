import Link from "next/link";
import React from "react";

function Success() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-extrabold lg:text-3xl mb-[13px]">
        Password Change!
      </h1>
      <p className="sm:text-[18px]">
        You have successfully change the password and now you are ready to go.
      </p>
      <Link
        href="/sign-in"
        className="bg-[#0077B6] text-white rounded-[30px] text-xl px-10 py-4 font-extrabold mt-10 inline-block"
      >
        Continue
      </Link>
    </div>
  );
}

export default Success;

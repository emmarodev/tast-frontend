import React from "react";

function Success() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-extrabold lg:text-5xl 2xl:text-[80px] 2xl:leading-[97.52px] mb-[13px]">
        Password Change!
      </h1>
      <p className="sm:text-[18px] 2xl:text-[25px]">
        You have successfully change the password and now you are ready to go.
      </p>
      <button className="bg-[#0077B6] text-white rounded-[30px] 2xl:px-[5.813rem] 2xl:py-[1.688rem] 2xl:text-2xl text-xl px-10 py-4 2xl:leading-[3.429rem] font-extrabold mt-20">
        Continue
      </button>
    </div>
  );
}

export default Success;

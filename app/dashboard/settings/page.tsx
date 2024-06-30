"use client";

import { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { CiLock } from "react-icons/ci";

function Settings() {
  const [isDelete, setDelete] = useState(false);

  return (
    <section className="flex items-center justify-center h-full w-full relative">
      <button
        className={`absolute right-0 top-0 py-2 px-4 rounded-md transition-all duration-150 font-semibold ${
          isDelete
            ? "bg-[#EE404C] hover:bg-[#EE404C]/80 text-white"
            : "bg-[#2FC9D2] hover:bg-[#2FC9D2]/80"
        }`}
        onClick={() => setDelete(!isDelete)}
      >
        {isDelete ? "Account Delete" : "Change Password"}
      </button>

      {isDelete ? <ChangePassword /> : <DeleteAccount />}
    </section>
  );
}

export default Settings;

function DeleteAccount() {
  return (
    <article className="border border-[#C3C3C3] bg-[#F2E6C9] rounded-lg p-8 text-[#6B6B6B]">
      <div className="flex gap-x-2 items-center mb-4">
        <div className="text-xl rounded-full bg-white h-10 w-10 items-center justify-center flex">
          <CgDanger className="text-red-500" />
        </div>
        <div className="text-xs">
          <h3 className="text-base font-semibold text-black">
            Delete Account?
          </h3>
          <p className="text-[#6B6B6B]">
            You are going to delete the “Demo Project”
          </p>
        </div>
      </div>

      <p className="max-w-[400px] text-sm">
        Your account will be remove all of your information from our database.
        This can’t be undone.
      </p>

      <form className="mt-10">
        <div className="bg-white rounded-md p-2 flex items-center gap-x-2 mb-1">
          <div className="p-1">
            <CiLock className="text-xl" />
          </div>
          <div className="border-l h-8 border-[#D9D9D9]" />
          <input type="password" className="focus:outline-none" />
        </div>
        <p className="text-sm">Enter your password to confirm</p>

        <div className="flex gap-x-4 mt-6">
          <button className="bg-white rounded-md py-3 font-semibold px-6 text-[#6B6B6B] text-sm">
            Cancel
          </button>
          <button className="bg-[#236BFE] rounded-md py-3 font-semibold px-6 text-white text-sm">
            Confirm Delete
          </button>
        </div>
      </form>
    </article>
  );
}

function ChangePassword() {
  return (
    <article className="border border-[#C3C3C3] bg-[#F2E6C9] rounded-lg p-8 text-[#6B6B6B]">
      <div className="flex gap-x-2 items-center mb-4">
        <div className="text-xl rounded-full bg-white h-10 w-10 items-center justify-center flex">
          <CiLock className="text-xl" />
        </div>
        <div className="text-xs">
          <h3 className="text-base font-semibold text-black">
            Change Password
          </h3>
          <p className="text-[#6B6B6B]">
            Update passwords for enhance account security
          </p>
        </div>
      </div>

      <form className="mt-10 grid gap-y-4">
        <div className="bg-white rounded-md p-2 flex items-center gap-x-2 mb-1">
          <div className="p-1">
            <CiLock className="text-xl" />
          </div>
          <div className="border-l h-8 border-[#D9D9D9]" />
          <input
            type="password"
            className="focus:outline-none text-sm"
            placeholder="Current Password"
          />
        </div>
        <div>
          <div className="bg-white rounded-md p-2 flex items-center gap-x-2 mb-1">
            <div className="p-1">
              <CiLock className="text-xl" />
            </div>
            <div className="border-l h-8 border-[#D9D9D9]" />
            <input
              type="password"
              className="focus:outline-none text-sm"
              placeholder="New Password"
            />
          </div>
          <div className="grid grid-cols-4 gap-x-2 mt-2 mb-1">
            <div className="h-[2px] rounded-full bg-[#D9D9D9]"></div>
            <div className="h-[2px] rounded-full bg-[#D9D9D9]"></div>
            <div className="h-[2px] rounded-full bg-[#D9D9D9]"></div>
            <div className="h-[2px] rounded-full bg-[#D9D9D9]"></div>
          </div>
          <p className="text-xs text-right">Good</p>
        </div>
        <div className="bg-white rounded-md p-2 flex items-center gap-x-2 mb-1">
          <div className="p-1">
            <CiLock className="text-xl" />
          </div>
          <div className="border-l h-8 border-[#D9D9D9]" />
          <input
            type="password"
            className="focus:outline-none text-sm"
            placeholder="Confirm New Password"
          />
        </div>

        <div>
          <button className="bg-[#236BFE] rounded-md py-3 font-semibold px-6 text-white text-sm w-full">
            Change My Password
          </button>
        </div>
      </form>
    </article>
  );
}

"use client";

import { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { CiLock } from "react-icons/ci";

function Settings() {
  const [isDelete, setDelete] = useState(false);

  return (
    <section className="relative flex h-full w-full items-center justify-center">
      <button
        className={`absolute right-0 top-0 rounded-md px-4 py-2 font-semibold transition-all duration-150 ${
          !isDelete
            ? "bg-[#EE404C] text-white hover:bg-[#EE404C]/80"
            : "bg-[#2FC9D2] hover:bg-[#2FC9D2]/80"
        }`}
        onClick={() => setDelete(!isDelete)}
      >
        {!isDelete ? "Account Delete" : "Change Password"}
      </button>

      {!isDelete ? <ChangePassword /> : <DeleteAccount />}
    </section>
  );
}

export default Settings;

function DeleteAccount() {
  return (
    <article className="rounded-lg border border-[#C3C3C3] bg-[#F2E6C9] p-8 text-[#6B6B6B]">
      <div className="mb-4 flex items-center gap-x-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl">
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
        <div className="mb-1 flex items-center gap-x-2 rounded-md bg-white p-2">
          <div className="p-1">
            <CiLock className="text-xl" />
          </div>
          <div className="h-8 border-l border-[#D9D9D9]" />
          <input type="password" className="focus:outline-none" />
        </div>
        <p className="text-sm">Enter your password to confirm</p>

        <div className="mt-6 flex gap-x-4">
          <button className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#6B6B6B]">
            Cancel
          </button>
          <button className="rounded-md bg-[#236BFE] px-6 py-3 text-sm font-semibold text-white">
            Confirm Delete
          </button>
        </div>
      </form>
    </article>
  );
}

function ChangePassword() {
  return (
    <article className="rounded-lg border border-[#C3C3C3] bg-[#F2E6C9] p-8 text-[#6B6B6B]">
      <div className="mb-4 flex items-center gap-x-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl">
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
        <div className="mb-1 flex items-center gap-x-2 rounded-md bg-white p-2">
          <div className="p-1">
            <CiLock className="text-xl" />
          </div>
          <div className="h-8 border-l border-[#D9D9D9]" />
          <input
            type="password"
            className="text-sm focus:outline-none"
            placeholder="Current Password"
          />
        </div>
        <div>
          <div className="mb-1 flex items-center gap-x-2 rounded-md bg-white p-2">
            <div className="p-1">
              <CiLock className="text-xl" />
            </div>
            <div className="h-8 border-l border-[#D9D9D9]" />
            <input
              type="password"
              className="text-sm focus:outline-none"
              placeholder="New Password"
            />
          </div>
          <div className="mb-1 mt-2 grid grid-cols-4 gap-x-2">
            <div className="h-[2px] rounded-full bg-[#D9D9D9]"></div>
            <div className="h-[2px] rounded-full bg-[#D9D9D9]"></div>
            <div className="h-[2px] rounded-full bg-[#D9D9D9]"></div>
            <div className="h-[2px] rounded-full bg-[#D9D9D9]"></div>
          </div>
          <p className="text-right text-xs">Good</p>
        </div>
        <div className="mb-1 flex items-center gap-x-2 rounded-md bg-white p-2">
          <div className="p-1">
            <CiLock className="text-xl" />
          </div>
          <div className="h-8 border-l border-[#D9D9D9]" />
          <input
            type="password"
            className="text-sm focus:outline-none"
            placeholder="Confirm New Password"
          />
        </div>

        <div>
          <button className="w-full rounded-md bg-[#236BFE] px-6 py-3 text-sm font-semibold text-white">
            Change My Password
          </button>
        </div>
      </form>
    </article>
  );
}

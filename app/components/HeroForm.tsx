import React from "react";

function HeroForm() {
  return (
    <form>
      <input
        type="search"
        placeholder="Search here..."
        className="mr-2 min-w-[280px] rounded-lg border px-3 py-3 shadow-xl focus:border-[#FFB200] focus:outline-none text-black"
      />
      <button className="rounded-lg bg-[#FFB200] px-6 py-3 font-semibold">
        Search
      </button>
    </form>
  );
}

export default HeroForm;

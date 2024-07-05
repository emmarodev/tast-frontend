const HeroFormWithSelect = ({ options }: { options: string[] }) => {
  return (
    <form>
      <select
        name=""
        id=""
        className="mr-1 rounded-lg px-4 py-3 text-black focus:outline-none"
      >
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="search"
        placeholder="Search here..."
        className="mr-2 min-w-[280px] rounded-lg border px-3 py-3 shadow-xl focus:border-[#FFB200] focus:outline-none"
      />
      <button className="rounded-lg bg-[#FFB200] px-6 py-3 font-semibold">
        Search
      </button>
    </form>
  );
};

export default HeroFormWithSelect;

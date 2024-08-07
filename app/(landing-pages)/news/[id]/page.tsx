import { SERVER_URL } from "@/app/constants/api";
import { formatISODateString } from "@/app/lib/formatISODateString";
import { CiHeart } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import { IoCalendarNumber, IoEyeSharp } from "react-icons/io5";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(`${SERVER_URL}/user/single/blog/${params.id}`);
  const { data } = await res.json();
  console.log(data);
  console.log(params);

  return (
    <div className="grid gap-y-8 bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-10">
      <section className="grid grid-cols-2 gap-x-4">
        <div className="rounded-xl bg-white"></div>
        <article className="rounded-xl bg-white px-8 py-6">
          <div className="mb-3 flex items-center gap-x-2 text-sm">
            <IoCalendarNumber />
            <p>{formatISODateString(data.createdAt)}</p>
          </div>
          <h1 className="mb-3 text-2xl font-bold uppercase">{data.title}</h1>
          <p>{data.description}</p>
          <footer className="mt-4 flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <IoEyeSharp className="text-xl font-bold text-[#172554]" />
              <p className="font-semibold text-[#79797999]">{data.view}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <IoMdShare className="text-xl font-bold text-[#172554]" />
              <p className="font-semibold text-[#79797999]">{data.share}</p>
            </div>
            <div className="flex items-center gap-x-2">
              <CiHeart className="text-xl font-bold text-[#172554]" />
              <p className="font-semibold text-[#79797999]">{data.favourite}</p>
            </div>
          </footer>
        </article>
      </section>
      <section className="rounded-xl bg-white px-8 py-6">
        <h2 className="mb-2 text-xl font-bold">Description</h2>
        <p>{data.description}</p>
      </section>
      <section className="flex">
        <button></button>
        <div className="grid grow grid-cols-4 gap-x-3"></div>
      </section>
    </div>
  );
}

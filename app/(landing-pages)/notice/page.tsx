import Line from "@/app/components/Line";
import Navbar from "@/app/components/Navbar";
import { CiHeart } from "react-icons/ci";
import { IoMdPricetag, IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Footer } from "../home/page";
import { GrServices } from "react-icons/gr";

function Services() {
  return (
    <div className="">
      <Navbar />
      <div className="px-4 bg-[#231B7D] pb-10 flex flex-col gap-y-4">
        <Hero />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Table />
      </div>
      <div className="px-14 pb-4 bg-[#231B7D] relative">
        <Footer />
      </div>
    </div>
  );
}

export default Services;

const Hero = () => {
  return (
    <section className="sm:py-20 relative bg-gray-500">
      <div className="w-full h-full sm:flex items-center text-white">
        <div className="hidden sm:block">
          {/* <Image
              alt="Mountains"
              src={}
              placeholder="blur"
              quality={100}
              layout="fill"
              sizes="100vw"
              style={{
                objectFit: "cover",
                zIndex: -5,
              }}
            /> */}
        </div>
        <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y-2 flex-col items-start">
          <Line />
          <h1 className="text-3xl max-w-[740px] font-bold leading-[60px] capitalize">
            <span className="text-[#ffb200]">Notice</span> Board
          </h1>
          <div>
            <input
              type="search"
              placeholder="Search here..."
              className="py-3 border rounded-lg shadow-xl px-3 mr-2 focus:outline-none focus:border-[#FFB200] min-w-[280px]"
            />
            <button className="py-3 px-6 bg-[#FFB200] font-semibold rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Table = () => {
  return (
    <div>
      <table className="w-full text-sm rounded-lg mt-4 border border-[#FFB200]">
        <thead className="bg-[#FFB200]">
          <tr>
            <th className="py-6">SL</th>
            <th className="">Notice Title</th>
            <th className="">Upload Data</th>
            <th className="">Status</th>
            <th className="">View</th>
          </tr>
        </thead>
        <tbody className="text-center border border-[#FFB200]">
          <tr className="odd:bg-[#FAEFD8] even:bg-white">
            <td className="py-6 border-r border-r-[#FFB200]">
              <span className="rounded px-2 py-1 bg-[#FFB200] font-semibold">
                1
              </span>
            </td>
            <td className="border-r border-r-[#FFB200]">Notice Title</td>
            <td className="border-r border-r-[#FFB200]">2023-10-20</td>
            <td className="border-r border-r-[#FFB200]">Software Engineer</td>
            <td className="border-r border-r-[#FFB200]">
              <button className="uppercase bg-[#FFB200] py-2 px-6 rounded font-semibold text-sm">
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

import Line from "@/app/components/Line";
import Navbar from "@/app/components/Navbar";
import { CiHeart } from "react-icons/ci";
import { IoMdPricetag, IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Footer } from "../../page";
import { GrServices } from "react-icons/gr";

function News() {
  return (
    <div className="">
      <Navbar />
      <div className="px-4 bg-[#231B7D] pb-10 flex flex-col gap-y-4">
        <Hero />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <NewsContainer />
      </div>
      <div className="px-14 pb-4 bg-[#231B7D] relative">
        <Footer />
      </div>
    </div>
  );
}

export default News;

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
        <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y- flex-col items-start">
          <Line />
          <h1 className="text-3xl max-w-[740px] font-bold leading-[60px] capitalize">
            Our Latest
            <span className="text-[#ffb200]"> News</span>
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

const NewsContainer = () => {
  return (
    <section>
      <div className="grid gap-4 grid-cols-4">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </section>
  );
};

const NewsCard = () => {
  return (
    <article className="bg-white shadow-xl p-2 text-[#00000099] font-medium relative overflow-hidden">
      <header className="bg-gray-500 h-52 mb-4"></header>
      <main className="mb-2 px-3">
        <p className="tracking-wide text-sm mb-2">NOV. 12, 2024</p>
        <div className="flex flex-col gap-y-1 mb-1">
          <Line />
          <h3 className="font-bold text-xl text-black">Stunning Design</h3>
        </div>
        <p>Of Scripture chosen especially for the su</p>
      </main>
      <footer className="flex items-center gap-x-4 px-3 pb-2">
        <div className="flex gap-x-2 items-center">
          <IoEyeSharp className="text-[#172554] text-2xl font-bold" />
          <p className="text-[#79797999] font-semibold">1.2k</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <IoMdShare className="text-[#172554] text-2xl font-bold" />
          <p className="text-[#79797999] font-semibold">1.2k</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <CiHeart className="text-[#172554] text-2xl font-bold" />
          <p className="text-[#79797999] font-semibold">1.2k</p>
        </div>
      </footer>
    </article>
  );
};

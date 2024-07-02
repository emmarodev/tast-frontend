import Line from "@/app/components/Line";
import Navbar from "@/app/components/Navbar";
import { CiHeart } from "react-icons/ci";
import { IoMdPricetag, IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Footer } from "../home/page";

function Architecture() {
  return (
    <div className="">
      <Navbar />
      <div className="px-4 bg-[#231B7D] pb-10 flex flex-col gap-y-4">
        <Hero />
        <Tools />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Features />
      </div>
      <div className="px-14 pb-4 bg-[#231B7D] relative">
        <Footer />
      </div>
    </div>
  );
}

export default Architecture;

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
        <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y-5 flex-col items-start">
          <Line />
          <h1 className="text-5xl max-w-[740px] font-bold leading-[60px] capitalize">
            our project
            <span className="text-[#ffb200]"> architecture</span> project
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

const Tools = () => {
  return (
    <div className="flex justify-center items-center gap-x-5">
      <div className="h-16 w-16 rounded-full bg-[#330000]"></div>
      <div className="h-16 w-16 rounded-full bg-[#330000]"></div>
      <div className="h-16 w-16 rounded-full bg-[#330000]"></div>
      <div className="h-16 w-16 rounded-full bg-[#330000]"></div>
      <div className="h-16 w-16 rounded-full bg-[#330000]"></div>
      <div className="h-16 w-16 rounded-full bg-[#330000]"></div>
      <div className="h-16 w-16 rounded-full bg-[#330000]"></div>
      <div className="h-16 w-16 rounded-full bg-[#330000]"></div>
    </div>
  );
};

const Features = () => {
  return (
    <section>
      <div className="grid gap-4 grid-cols-4">
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </div>
    </section>
  );
};

const FeaturesCard = () => {
  return (
    <div className="flip-card relative shadow-xl">
      <div className="flip-card-inner absolute transform transition duration-500 ease-in-out hover:rotate-y-180 h-fit">
        <FeaturesCardFront />
        <FeaturesCardBack />
      </div>
    </div>
  );
};

const FeaturesCardFront = () => {
  return (
    <article className="flip-card-front absolute w-full rounded-md h-[400px] flex flex-col">
      <div className="grow">
        <div className="bg-gray-400 h-full relative">
          <div className="absolute bottom-6 left-6">
            <Line />
            <h3 className="text-white text-2xl font-bold mt-2">
              Stunning Designs
            </h3>
          </div>

          <div className="absolute top-6 -right-2 bg-[#ffb200] text-white px-4 py-1 rounded">
            <p>$2300</p>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 font-semibold text-sm py-6 text-[#727272]">
        <p className="mb-1 tracking-wider">NOV. 12, 2024</p>
        <button className="bg-[#ffb200] text-black py-3 w-full rounded mb-4">
          SEE PLAN
        </button>
        <div className="flex items-center gap-x-4 text-base">
          <div className="flex gap-x-2 items-center">
            <IoEyeSharp className="text-black text-2xl font-bold" />
            <p className="text-[#79797999] font-semibold">1.2k</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <IoMdShare className="text-black text-2xl font-bold" />
            <p className="text-[#79797999] font-semibold">1.2k</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <CiHeart className="text-black text-2xl font-bold" />
            <p className="text-[#79797999] font-semibold">1.2k</p>
          </div>
        </div>
      </div>
    </article>
  );
};

const FeaturesCardBack = () => {
  return (
    <article className="flip-card-back h-[400px] w-full relative border px-6 bg-gray-900 py-16">
      <div className="mb-4">
        <Line />
        <h3 className="text-white text-2xl font-bold mt-2">Stunning Designs</h3>
      </div>

      <ul className="text-white flex flex-col gap-y-1">
        <li>
          <span className="font-bold">House:</span> 1200 sq ft. house
        </li>
        <li>
          <span className="font-bold">Kitchens:</span> 2
        </li>
        <li>
          <span className="font-bold">Bedrooms:</span> 3
        </li>
        <li>
          <span className="font-bold">Balconies:</span> 1
        </li>
      </ul>

      <div className="absolute top-6 -right-2 bg-[#ffb200] text-white px-4 py-1 rounded">
        <p>$2300</p>
      </div>

      <div className="font-semibold text-sm py-6 text-[#727272] ">
        <p className="mb-1 tracking-wider">NOV. 12, 2024</p>
        <button className="bg-[#ffb200] text-black py-3 w-full rounded mb-4">
          SEE PLAN
        </button>
        <div className="flex items-center gap-x-4 text-base">
          <div className="flex gap-x-2 items-center">
            <IoEyeSharp className="text-[#ffb200] text-2xl font-bold" />
            <p className="text-white font-medium">1.2k</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <IoMdShare className="text-[#ffb200] text-2xl font-bold" />
            <p className="text-white font-medium">1.2k</p>
          </div>
          <div className="flex gap-x-2 items-center">
            <CiHeart className="text-[#ffb200] text-2xl font-bold" />
            <p className="text-white font-medium">1.2k</p>
          </div>
        </div>
      </div>
    </article>
  );
};

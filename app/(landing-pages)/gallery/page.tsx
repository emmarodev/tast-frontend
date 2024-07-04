import Line from "@/app/components/Line";
import Navbar from "@/app/components/Navbar";
import { CiHeart } from "react-icons/ci";
import { IoMdPricetag, IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Footer } from "../page";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Template() {
  const categories = [
    "All",
    "Home",
    "Road",
    "Bridge",
    "Electricity",
    "Airport",
    "Railway",
  ];

  return (
    <div className="">
      <Navbar />
      <div className="px-4 bg-[#231B7D] pb-10 flex flex-col gap-y-4">
        <Hero />

        <div className="flex gap-x-4 items-center">
          <button className="flex justify-center items-center h-8 w-8 bg-[#ffb200] rounded-full text-[#231B7D] hover:bg-[#ffb200]/90">
            <FaArrowLeft />
          </button>
          <div className="flex grow gap-x-6">
            {categories.map((category, i) => {
              return (
                <button
                  key={i}
                  className="bg-white hover:bg-black hover:text-white rounded py-3 uppercase font-semibold text-center grow transition-all duration-150"
                >
                  {category}
                </button>
              );
            })}
          </div>
          <button className="flex justify-center items-center h-8 w-8 bg-[#ffb200] rounded-full text-[#231B7D] hover:bg-[#ffb200]/90">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Gallery />
      </div>

      <div className="px-14 pb-4 bg-[#231B7D] relative">
        <Footer />
      </div>
    </div>
  );
}

export default Template;

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
            Exclusive Service
            <span className="text-[#FFB200]"> Gallery</span>
          </h1>
          <div>
            <select
              name=""
              id=""
              className="py-3 rounded-lg mr-1 text-black px-4 focus:outline-none"
            >
              <option value="videos">Videos</option>
              <option value="photo">Photo</option>
            </select>
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

const Gallery = () => {
  return (
    <section>
      <div className="grid grid-cols-5 gap-4">
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
        <div className="h-40 bg-gray-400   rounded"></div>
      </div>
    </section>
  );
};

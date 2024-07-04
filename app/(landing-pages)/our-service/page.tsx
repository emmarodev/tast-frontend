import Line from "@/app/components/Line";
import Navbar from "@/app/components/Navbar";
import { CiHeart } from "react-icons/ci";
import { IoMdPricetag, IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Footer } from "../page";
import { GrServices } from "react-icons/gr";

function Services() {
  return (
    <div className="">
      <Navbar />
      <div className="px-4 bg-[#231B7D] pb-10 flex flex-col gap-y-4">
        <Hero />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Service />
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
        <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y- flex-col items-start">
          <Line />
          <h1 className="text-3xl max-w-[740px] font-bold leading-[60px] capitalize">
            Our
            <span className="text-[#ffb200]"> Services</span>
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

const Service = () => {
  return (
    <div>
      <section className="grid grid-cols-4 gap-10">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </section>
    </div>
  );
};

const ServiceCard = () => {
  return (
    <article className="group border border-[#B0B0B0] rounded-md bg-white flex flex-col items-center py-5 h-fit text-sm gap-y-2 hover:bg-[#ffb200] transition-all duration-200">
      <div className="rounded-full h-16 w-16 bg-[#ffb200] group-hover:bg-black transition-all duration-200 flex items-center justify-center">
        <GrServices className="group-hover:text-[#ffb200] text-black text-4xl transition-all duration-200" />
      </div>
      <h3 className="font-bold text-base">Technology Consulting</h3>
      <p className="text-sm">
        Of Scripture chosen <br /> especially for the su
      </p>
      <button className="border bg-transparent py-2 px-4 text-xs border-[#ffb200] rounded mt-4 font-bold group-hover:border-black group-hover:text-white group-hover:bg-black transition-all duration-150">
        LEARN MORE
      </button>
    </article>
  );
};

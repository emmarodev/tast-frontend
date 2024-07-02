import Line from "@/app/components/Line";
import Navbar from "@/app/components/Navbar";
import { CiHeart } from "react-icons/ci";
import { IoMdPricetag, IoMdShare } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Footer } from "../home/page";

function Template() {
  return (
    <div className="">
      <Navbar />
      <div className="px-4 bg-[#231B7D] pb-10 flex flex-col gap-y-4">
        <Hero />
        <Tools />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Project />
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
        <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y-5 flex-col items-start">
          <Line />
          <h1 className="text-5xl max-w-[740px] font-bold leading-[60px] capitalize">
            our project And
            <span className="text-[#2A56EB]"> Technologies</span>
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

const Project = () => {
  return (
    <section>
      <div className="grid grid-cols-4 gap-4">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

const ProjectCard = () => {
  return (
    <article className="bg-white rounded-xl shadow-xl px-6 py-5 text-[#00000099] font-medium relative overflow-hidden">
      <header className="bg-gray-500 rounded-lg h-52 mb-4"></header>
      <main className="mb-2">
        <p className="tracking-wide text-sm">NOV. 12, 2024</p>
        <h3 className="font-bold text-xl text-black mb-2">Web Development</h3>
        <p>Of Scripture chosen especially for the su</p>
      </main>
      <footer className="flex items-center gap-x-4">
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
      <div className="absolute top-0 right-0 bg-[#172554] text-white font-medium text-xl rounded-es-full flex items-center gap-x-1 px-8 py-3">
        <IoMdPricetag className="text-white text-2xl" />
        <p>$1234</p>
      </div>
    </article>
  );
};

import Line from "@/app/components/Line";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { functionalData, placeholderData } from "./data";
import { GrServices } from "react-icons/gr";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { IoCall, IoEyeSharp } from "react-icons/io5";
import { IoMdPricetag, IoMdShare } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../public/logo.svg";
import parallel from "../public/parallel.jpg";
import skyscrapper from "../public/skyscrapper.jpg";
import house from "../public/house.jpg";
import oil from "../public/oil.jpg";
import art from "../public/art.jpg";
import duplex from "../public/duplex.jpg";
import team from "../public/team.jpg";
import rally from "../public/rally.jpg";
import estate from "../public/estate.jpg";
import discuss from "../public/discuss.jpg";
import cloud from "../public/cloud.jpg";
import camp from "../public/camp.jpg";
import brain from "../public/brain.jpg";
import canoe from "../public/canoe.jpg";
import ceiling from "../public/ceiling.jpg";
import anthony from "../public/anthony.png";
import nabur from "../public/nabur.png";
import map from "../public/map.png";

function Home() {
  return (
    <section>
      <Navbar />
      <div className="px-4 bg-[#231B7D] pb-10">
        <Hero />
        <Placeholder />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Service />
      </div>
      <div className="p-14 bg-[#231B7D] pb-10">
        <Gallery />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Project />
      </div>
      <div className="p-14 bg-[#231B7D] pb-10">
        <Features />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Feedback />
      </div>
      <div className="p-14 bg-[#231B7D] pb-10">
        <News />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Evidence />
      </div>
      <div className="p-14 bg-[#231B7D] pb-10">
        <div className="relative mx-auto w-[95%] h-72">
          <Image
            alt="Mountains"
            src={map}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Evidence />
      </div>
      <div className="px-14 pb-4 bg-[#231B7D] relative">
        <Footer />
      </div>
    </section>
  );
}

export default Home;

const Hero = () => {
  return (
    <section className="sm:py-20 relative">
      <div className="w-full h-full sm:flex items-center text-white">
        <div className="hidden sm:block">
          <Image
            alt="Mountains"
            src={parallel}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
              zIndex: 0,
            }}
          />
        </div>
        <div className="z-10 absolute w-full h-full top-0 left-0 bg-black/80"></div>
        <div className="rounded-none sm:rounded-[40px] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem] 2xl:py-[4.625rem] px-5 sm:px-20 py-8 flex gap-y-5 flex-col items-start z-20">
          <h1 className="text-3xl max-w-[740px] font-bold leading-[60px]">
            THE HEALTH, <span className="text-[#FFB200]">EDUCATIONAL</span>{" "}
            <br /> AND
            <span className="text-[#2A56EB]"> HOUSING</span> FACILITY <br />{" "}
            BOARD
          </h1>
          <Line />
          <p className="max-w-[540px]">
            There are four general steps in the HRP process: identifying the
            current supply of employees, determining the future of the
            workforce, balancing between labor supply and demand, and developing
            plans that support the companys goals.
          </p>
          <button className="bg-[#FFB200] text-black mt-4 rounded-lg py-3 px-5 font-bold text-sm">
            GET STARTED
          </button>
        </div>
      </div>
    </section>
  );
};

const Placeholder = () => {
  return (
    <section className="mt-6">
      <div className="flex flex-col items-center gap-y-4 mb-10">
        <Line />
        <h2 className="font-bold text-2xl text-white">Placeholder Text</h2>
      </div>
      <div className="flex justify-center gap-x-52">
        {placeholderData.map((data, i) => {
          return (
            <article
              className="text-center max-w-[200px] text-sm text-white"
              key={i}
            >
              <Image
                src={data.icon}
                alt="icon"
                width={60}
                className="mx-auto mb-3"
              />
              <h3 className="font-bold text-base mb-3">{data.title}</h3>
              <p className="text-[#FFFFFFB2] mb-3">{data.text}</p>
              <button className="font-semibold bg-[#FFB200] text-black py-2 px-4 rounded uppercase hover:bg-black hover:text-white transition-all duration-150 text-xs">
                Read more
              </button>
            </article>
          );
        })}
      </div>

      <div className="mt-20 flex px-10 gap-x-10">
        <div className="w-3/5 bg-[#EDEDED] rounded flex flex-col">
          <div className="rounded grow relative bg-gray-500">
            <Image
              alt="Mountains"
              src={skyscrapper}
              placeholder="blur"
              quality={100}
              layout="fill"
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
            <div className="flex gap-y-4 flex-col absolute bottom-0 px-10 pb-10 z-20">
              <Line />
              <h2 className="font-semibold text-white text-2xl">
                Company Website Security
              </h2>
            </div>
          </div>
          <div className="p-10 grid gap-y-2">
            <p>
              Out that no scientist had seen a Blakiston’s fish owl so far south
              in a hundred years, and my photographs were evidence that this
              rare, reclusive species still persisted. Out that no scientist had
              seen a Blakiston’s fish owl so far south in a hundred years.
            </p>
            <button className="font-bold bg-[#ffb200] w-full py-3 rounded">
              READ MORE
            </button>
          </div>
        </div>
        <div className="w-2/5 grid gap-y-4">
          {functionalData.map((data, i) => {
            return (
              <article
                key={i}
                className="flex items-center gap-x-4 px-4 py-4 hover:bg-[#ffb200] bg-white rounded transition-all duration-150"
              >
                <div>
                  <Image src={data.icon} alt="icon" />
                </div>
                <div className="">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-[#00000099] text-sm">{data.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Service = () => {
  return (
    <div>
      <section className="grid grid-cols-4 gap-10">
        <div className="col-span-2 flex flex-col gap-y-3">
          <Line color={"#231F20"} />
          <h2 className="text-[#231F20] text-2xl font-bold">Our Service</h2>
          <p className="min-w-[480px] mt-4">
            Lorem ipsum dolor sit amet consectetur. Phasellus eros purus eu
            urna. Nunc aliquam est. Lorem ipsum dolor sit amet consectetur.
            Phasellus eros purus eu urna. Nunc aliquam est Lorem ipsum dolor sit
            amet consectetur. Phasellus eros purus eu urna. Nunc aliquam est.
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </section>

      <div className="flex justify-center">
        <button className="bg-[#222222] py-3 rounded text-white text-sm font-semibold px-6 inline-block mt-10 border hover:bg-[#222222]/90">
          SEE MORE
        </button>
      </div>
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

const Gallery = () => {
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
    <section>
      <div className="flex flex-col items-center gap-y-4 mb-10">
        <Line />
        <h2 className="font-bold text-2xl text-white">
          Exclusive Service Gallery
        </h2>
      </div>
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

      <div className="grid grid-cols-4 grid-rows-3 gap-4 mt-6">
        <div className="col-span-2 row-span-2 relative rounded">
          <Image
            alt="Mountains"
            src={art}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative h-56 rounded">
          <Image
            alt="Mountains"
            src={parallel}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative rounded">
          <Image
            alt="Mountains"
            src={duplex}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative rounded">
          <Image
            alt="Mountains"
            src={oil}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative rounded">
          <Image
            alt="Mountains"
            src={skyscrapper}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative rounded">
          <Image
            alt="Mountains"
            src={parallel}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative rounded">
          <Image
            alt="Mountains"
            src={house}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative rounded">
          <Image
            alt="Mountains"
            src={parallel}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="relative rounded">
          <Image
            alt="Mountains"
            src={house}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-[#ffb200] py-3 rounded text-sm font-semibold px-6 inline-block mt-10 hover:bg-[#ffb200]/90">
          SEE MORE
        </button>
      </div>
    </section>
  );
};

const Project = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-y-4 mb-10">
        <Line />
        <h2 className="font-bold text-2xl text-[#222222]">Our Project</h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <ProjectCard image={camp} />
        <ProjectCard image={discuss} />
        <ProjectCard image={brain} />
        <ProjectCard image={team} />
        <ProjectCard image={cloud} />
        <ProjectCard image={rally} />
        <ProjectCard image={camp} />
        <ProjectCard image={estate} />
      </div>

      <div className="flex justify-center">
        <button className="bg-[#ffb200] py-3 rounded text-sm font-semibold px-6 inline-block mt-10 hover:bg-[#ffb200]/90">
          SEE MORE
        </button>
      </div>
    </section>
  );
};

const ProjectCard = ({ image }: { image: any }) => {
  return (
    <article className="bg-white rounded-xl shadow-xl px-6 py-5 text-[#00000099] font-medium relative overflow-hidden">
      <header className="rounded-lg h-52 mb-4 relative overflow-hidden">
        <Image
          alt="Mountains"
          src={image}
          placeholder="blur"
          quality={100}
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </header>
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

const Features = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-y-4 mb-10">
        <Line />
        <h2 className="font-bold text-2xl text-white">Featured Architecture</h2>
      </div>

      <div className="grid gap-4 grid-cols-4">
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </div>

      <div className="flex justify-center">
        <button className="bg-[#ffb200] py-3 rounded text-sm font-semibold px-6 inline-block mt-10 hover:bg-[#ffb200]/90">
          SEE MORE
        </button>
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
        <div className="h-full relative">
          <Image
            alt="Mountains"
            src={canoe}
            placeholder="blur"
            quality={100}
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

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
    <article className="flip-card-back h-[400px] w-full px-6 bg-gray-900 py-10 relative">
      <Image
        alt="Mountains"
        src={ceiling}
        placeholder="blur"
        quality={100}
        layout="fill"
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
        className="-z-20"
      />
      <div className="absolute top-0 left-0 h-full w-full -z-10 bg-black/80"></div>

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

const Feedback = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-y-1 mb-10">
        <Line />
        <h2 className="font-bold text-2xl text-[#222222] mt-3">
          Customer Feedback
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Phasellus eros purus eu urna.
          Nunc aliquam est.
        </p>
      </div>

      <div className="grid grid-cols-3 place-items-center">
        <FeedbackCard image={anthony} />
        <FeedbackCard image={nabur} />
        <FeedbackCard image={anthony} />
      </div>
    </section>
  );
};

const FeedbackCard = ({ image }: { image: any }) => {
  return (
    <article className="group hover:bg-[#ffb200] w-[240px] rounded-md px-10 py-8 h-[400px] flex flex-col items-center gap-y-4">
      <div className="rounded-full h-40 w-40 border-2 border-[#ffb200] group-hover:h-44 group-hover:w-32 relative overflow-hidden">
        <Image
          alt="Mountains"
          src={image}
          placeholder="blur"
          quality={100}
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="h-6 w-[2px] bg-[#ffb200] group-hover:bg-black" />

      <div
        className="
      flex flex-col items-center"
      >
        <h3>Nina Sanchez</h3>
        <p>Architect</p>
        <div className="flex gap-x-1 text-[#ffb200] group-hover:text-black">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>
    </article>
  );
};

const News = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-y-4 mb-10">
        <Line />
        <h2 className="font-bold text-2xl text-white">Our Latest News</h2>
      </div>

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

      <div className="flex justify-center">
        <button className="bg-[#ffb200] py-3 rounded text-sm font-semibold px-6 inline-block mt-10 hover:bg-[#ffb200]/90">
          SEE MORE
        </button>
      </div>
    </section>
  );
};

const NewsCard = () => {
  return (
    <article className="bg-white shadow-xl p-2 text-[#00000099] font-medium relative overflow-hidden">
      <header className="relative h-52 mb-4">
        <Image
          alt="Mountains"
          src={canoe}
          placeholder="blur"
          quality={100}
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </header>
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

const Evidence = () => {
  return (
    <section className="bg-[#ffb200] rounded py-8 px-10">
      <ul className="flex gap-x-4 justify-between">
        <li className="flex items-center flex-col">
          <span className="text-3xl tracking-wider font-bold">125 M+</span>
          <p className="font-semibold text-sm uppercase">Customers</p>
        </li>
        <li className="flex items-center flex-col">
          <span className="text-3xl tracking-wider font-bold">125 K+</span>
          <p className="font-semibold text-sm uppercase">projects</p>
        </li>
        <li className="flex items-center flex-col">
          <span className="text-3xl tracking-wider font-bold">25 K+</span>
          <p className="font-semibold text-sm uppercase">Completed project</p>
        </li>
        <li className="flex items-center flex-col">
          <span className="text-3xl tracking-wider font-bold">24 K+</span>
          <p className="font-semibold text-sm uppercase">Client satisfied</p>
        </li>
        <li className="flex items-center flex-col">
          <span className="text-3xl tracking-wider font-bold">95 K+</span>
          <p className="font-semibold text-sm uppercase">Employers</p>
        </li>
        <li className="flex items-center flex-col">
          <span className="text-3xl tracking-wider font-bold">200 M+</span>
          <p className="font-semibold text-sm uppercase">our support</p>
        </li>
      </ul>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="relative">
      <section className="bg-[#ffb200] text-sm py-10 px-10 mb-3">
        <div className="mb-4 flex justify-between">
          <ul>
            <li className="flex gap-x-4 items-center">
              <Image src={logo} alt="Logo" />
              <p className="font-bold text-2xl tracking-wider text-[#14208F]">
                NASA
              </p>
            </li>
            <li className="mt-4">
              <ul className="flex gap-y-2 flex-col">
                <li className="flex gap-x-1 items-center">
                  <FaLocationDot /> London, Vladivostok named Sergey
                </li>
                <li className="flex gap-x-1 items-center">
                  <MdOutlineEmail /> sampleemail@email.com
                </li>
                <li className="flex gap-x-1 items-center">
                  <IoCall />
                  +1 949494+99
                </li>
                <li className="flex gap-x-1 items-center">
                  <IoCall />
                  +44 496961999
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li className="font-bold text-lg mb-2">Company</li>
            <li>Cookies</li>
            <li>Contact Us</li>
            <li>Help $ Support</li>
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>Global Locations</li>
            <li>Global Businesses</li>
          </ul>
          <ul>
            <li className="font-bold text-lg mb-2">Information technology</li>
            <li>Fire Safety</li>
            <li>Electrical Safety</li>
            <li>Detailed Engineering Assessment(DEA)</li>
            <li>Energy Efficient Audit</li>
            <li>Architectural</li>
            <li>Testing and Training</li>
            <li>Environmental and Social</li>
            <li>Impact Assessment</li>
            <li>Green Building</li>
          </ul>
          <ul>
            <li className="font-bold text-lg mb-2">Civil Engineering</li>
            <li>Energy Efficient Audit</li>
            <li>Architectural</li>
            <li>Testing and Training</li>
            <li>Environmental and Social</li>
            <li>Impact Assessment</li>
            <li>Green Building</li>
            <li>Cap Management</li>
            <li>Material Testing</li>
          </ul>
        </div>
      </section>
      <section className="text-[#FFFFFFB2] flex justify-between items-center">
        <ul className="flex gap-x-2">
          <li className="h-10 w-10 rounded-full bg-[#ffb200]"></li>
          <li className="h-10 w-10 rounded-full bg-[#ffb200]"></li>
          <li className="h-10 w-10 rounded-full bg-[#ffb200]"></li>
          <li className="h-10 w-10 rounded-full bg-[#ffb200]"></li>
        </ul>
        <p className="text-sm">© 2024 Sample. All rights reserved.</p>
      </section>
    </footer>
  );
};

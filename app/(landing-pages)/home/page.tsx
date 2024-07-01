import Line from "@/app/components/Line";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { functionalData, placeholderData } from "./data";
import { GrServices } from "react-icons/gr";

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
    </section>
  );
}

export default Home;

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
          <h1 className="text-5xl max-w-[740px] font-bold leading-[60px]">
            THE HEALTH, <span className="text-[#FFB200]">EDUCATIONAL</span> AND
            <span className="text-[#2A56EB]"> HOUSING</span> FACILITY BOARD
          </h1>
          <Line />
          <p className="max-w-[540px]">
            There are four general steps in the HRP process: identifying the
            current supply of employees, determining the future of the
            workforce, balancing between labor supply and demand, and developing
            plans that support the company's goals.
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
            <div className="flex gap-y-4 flex-col absolute bottom-0 px-10 pb-10">
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

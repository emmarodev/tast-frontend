import Image from "next/image";
import { functionalData, placeholderData } from "../data";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import Line from "../components/Line";
import ProjectCard from "../components/ProjectCard";
import FeaturesCard from "../components/FeaturesCard";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import parallel from "../../public/parallel.jpg";
import skyscrapper from "../../public/skyscrapper.jpg";
import camp from "../../public/camp.jpg";
import anthony from "../../public/anthony.png";
import nabur from "../../public/nabur.png";
import map from "../../public/map.png";
import huff from "../../public/huff.png";
import vienna from "../../public/vienna.png";
import ags from "../../public/ags.png";
import park from "../../public/park.png";
import lola from "../../public/lola.png";
import cp from "../../public/cp.png";
import { SERVER_URL } from "@/app/constants/api";
import { ArchitectureDataProps } from "./architecture/definition";
import NewsCard from "../components/NewsCard";

async function getData() {
  const res = await fetch(`${SERVER_URL}/user/homepage`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const { data } = await getData();
  return (
    <>
      <header className="bg-[#231B7D] px-4 pb-10">
        <Hero image={parallel}>
          <h1 className="hero-heading">
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
          <button className="mt-4 rounded-lg bg-[#FFB200] px-5 py-3 text-sm font-bold text-black">
            GET STARTED
          </button>
        </Hero>
        <Placeholder />
      </header>

      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Service />
      </div>
      <div className="bg-[#231B7D] p-14 pb-10">
        <Gallery />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Project />
      </div>
      <div className="bg-[#231B7D] p-14 pb-10">
        <Features />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Feedback />
      </div>
      <div className="bg-[#231B7D] p-14 pb-10">
        <News />
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Evidence />
      </div>
      <div className="bg-[#231B7D] p-14 pb-10">
        <div className="relative mx-auto h-72 w-[95%]">
          <Image
            alt="Mountains"
            src={map}
            placeholder="blur"
            layout="fill"
            quality={100}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14">
        <Sponsors />
      </div>
    </>
  );
}

const Placeholder = () => {
  return (
    <section className="mt-6">
      <div className="mb-10 flex flex-col items-center gap-y-4">
        <Line />
        <h2 className="text-2xl font-bold text-white">Placeholder Text</h2>
      </div>
      <div className="flex justify-center gap-x-52">
        {placeholderData.map((data, i) => {
          return (
            <article
              className="max-w-[200px] text-center text-sm text-white"
              key={i}
            >
              <Image
                src={data.icon}
                alt="icon"
                width={60}
                className="mx-auto mb-3"
              />
              <h3 className="mb-3 text-base font-bold">{data.title}</h3>
              <p className="mb-3 text-[#FFFFFFB2]">{data.text}</p>
              <button className="rounded bg-[#FFB200] px-4 py-2 text-xs font-semibold uppercase text-black transition-all duration-150 hover:bg-black hover:text-white">
                Read more
              </button>
            </article>
          );
        })}
      </div>

      <div className="mt-20 flex gap-x-10 px-10">
        <div className="flex w-3/5 flex-col rounded bg-[#EDEDED]">
          <div className="relative grow rounded bg-gray-500">
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
            <div className="absolute left-0 top-0 h-full w-full bg-black/60"></div>
            <div className="absolute bottom-0 z-20 flex flex-col gap-y-4 px-10 pb-10">
              <Line />
              <h2 className="text-2xl font-semibold text-white">
                Company Website Security
              </h2>
            </div>
          </div>
          <div className="grid gap-y-2 p-10">
            <p>
              Out that no scientist had seen a Blakiston’s fish owl so far south
              in a hundred years, and my photographs were evidence that this
              rare, reclusive species still persisted. Out that no scientist had
              seen a Blakiston’s fish owl so far south in a hundred years.
            </p>
            <button className="w-full rounded bg-[#ffb200] py-3 font-bold">
              READ MORE
            </button>
          </div>
        </div>
        <div className="grid w-2/5 gap-y-4">
          {functionalData.map((data, i) => {
            return (
              <article
                key={i}
                className="flex items-center gap-x-4 rounded bg-white px-4 py-4 transition-all duration-150 hover:bg-[#ffb200]"
              >
                <div>
                  <Image src={data.icon} alt="icon" />
                </div>
                <div className="">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-[#00000099]">{data.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Service = async () => {
  const { data } = await getData();

  return (
    <div>
      <section className="grid grid-cols-4 gap-10">
        <div className="col-span-2 flex flex-col gap-y-3">
          <Line color={"#231F20"} />
          <h2 className="text-2xl font-bold text-[#231F20]">Our Service</h2>
          <p className="mt-4 min-w-[480px]">
            Lorem ipsum dolor sit amet consectetur. Phasellus eros purus eu
            urna. Nunc aliquam est. Lorem ipsum dolor sit amet consectetur.
            Phasellus eros purus eu urna. Nunc aliquam est Lorem ipsum dolor sit
            amet consectetur. Phasellus eros purus eu urna. Nunc aliquam est.
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        {data.service.map((d: any) => (
          <ServiceCard data={d} key={d._id} />
        ))}
      </section>

      {/* <div className="flex justify-center">
        <button className="mt-10 inline-block rounded border bg-[#222222] px-6 py-3 text-sm font-semibold text-white hover:bg-[#222222]/90">
          SEE MORE
        </button>
      </div> */}
    </div>
  );
};

const Gallery = async () => {
  const { data } = await getData();
  const others = data.servicegallery.slice(1);

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
      <div className="mb-10 flex flex-col items-center gap-y-4">
        <Line />
        <h2 className="text-2xl font-bold text-white">
          Exclusive Service Gallery
        </h2>
      </div>
      <div className="flex items-center gap-x-4">
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffb200] text-[#231B7D] hover:bg-[#ffb200]/90">
          <FaArrowLeft />
        </button>
        <div className="flex grow gap-x-6">
          {categories.map((category, i) => {
            return (
              <button
                key={i}
                className="grow rounded bg-white py-3 text-center font-semibold uppercase transition-all duration-150 hover:bg-black hover:text-white"
              >
                {category}
              </button>
            );
          })}
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffb200] text-[#231B7D] hover:bg-[#ffb200]/90">
          <FaArrowRight />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">
        {data.servicegallery.length > 0 && (
          <div className="relative col-span-2 row-span-2 rounded">
            <Image
              alt="Mountains"
              src={data.servicegallery[0].media}
              quality={100}
              sizes="100vw"
              width={1181}
              height={500}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        )}
        {data.servicegallery.length > 1 &&
          data.servicegallery.slice(1).map((obj: any) => {
            return (
              <div key={obj._id} className="relative rounded">
                <Image
                  alt="Mountains"
                  src={obj.media}
                  quality={100}
                  width={463}
                  height={366}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            );
          })}
      </div>

      {/* <div className="mt-10 flex justify-center">
        <button className="inline-block rounded bg-[#ffb200] px-6 py-3 text-sm font-semibold hover:bg-[#ffb200]/90">
          SEE MORE
        </button>
      </div> */}
    </section>
  );
};

const Project = async () => {
  const { data } = await getData();

  return (
    <section>
      <div className="mb-10 flex flex-col items-center gap-y-4">
        <Line />
        <h2 className="text-2xl font-bold text-[#222222]">Our Project</h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.project.map((d: any) => (
          <ProjectCard data={d} image={camp} key={d._id} />
        ))}
      </div>

      {/* <div className="flex justify-center">
        <button className="mt-10 inline-block rounded bg-[#ffb200] px-6 py-3 text-sm font-semibold hover:bg-[#ffb200]/90">
          SEE MORE
        </button>
      </div> */}
    </section>
  );
};

const Features = async () => {
  const { data } = await getData();

  return (
    <section>
      <div className="mb-10 flex flex-col items-center gap-y-4">
        <Line />
        <h2 className="text-2xl font-bold text-white">Featured Architecture</h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.architecture.map((d: ArchitectureDataProps) => (
          <FeaturesCard key={d._id} data={d} />
        ))}
      </div>

      {/* <div className="flex justify-center">
        <button className="mt-10 inline-block rounded bg-[#ffb200] px-6 py-3 text-sm font-semibold hover:bg-[#ffb200]/90">
          SEE MORE
        </button>
      </div> */}
    </section>
  );
};

const Feedback = () => {
  return (
    <section>
      <div className="mb-10 flex flex-col items-center gap-y-1">
        <Line />
        <h2 className="mt-3 text-2xl font-bold text-[#222222]">
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
    <article className="group flex h-[400px] w-[240px] flex-col items-center gap-y-4 rounded-md px-10 py-8 hover:bg-[#ffb200]">
      <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-[#ffb200]">
        <Image
          alt="Mountains"
          src={image}
          placeholder="blur"
          quality={100}
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="flex flex-col items-center">
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

const News = async () => {
  const { data } = await getData();

  return (
    <section>
      <div className="mb-10 flex flex-col items-center gap-y-4">
        <Line />
        <h2 className="text-2xl font-bold text-white">Our Latest News</h2>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {data.blog.map((d: ArchitectureDataProps) => (
          <NewsCard data={d} key={d._id} />
        ))}
      </div>

      {/* <div className="flex justify-center">
        <button className="mt-10 inline-block rounded bg-[#ffb200] px-6 py-3 text-sm font-semibold hover:bg-[#ffb200]/90">
          SEE MORE
        </button>
      </div> */}
    </section>
  );
};

const Evidence = () => {
  return (
    <section className="rounded bg-[#ffb200] px-10 py-8 shadow-xl">
      <ul className="flex justify-between gap-x-4">
        <li className="flex flex-col items-center">
          <span className="text-3xl font-bold tracking-wider">125 M+</span>
          <p className="text-sm font-semibold uppercase">Customers</p>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-3xl font-bold tracking-wider">125 K+</span>
          <p className="text-sm font-semibold uppercase">projects</p>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-3xl font-bold tracking-wider">25 K+</span>
          <p className="text-sm font-semibold uppercase">Completed project</p>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-3xl font-bold tracking-wider">24 K+</span>
          <p className="text-sm font-semibold uppercase">Client satisfied</p>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-3xl font-bold tracking-wider">95 K+</span>
          <p className="text-sm font-semibold uppercase">Employers</p>
        </li>
        <li className="flex flex-col items-center">
          <span className="text-3xl font-bold tracking-wider">200 M+</span>
          <p className="text-sm font-semibold uppercase">our support</p>
        </li>
      </ul>
    </section>
  );
};

const Sponsors = () => {
  return (
    <section className="mb-10">
      <div className="flex flex-col gap-y-4">
        <Line />
        <h2 className="text-2xl font-bold text-black">Placeholder</h2>
      </div>

      <div className="flex items-center justify-between gap-x-6">
        <Image src={lola} alt="lola company logo" width={120} />
        <Image src={cp} alt="lola company logo" width={120} />
        <Image src={huff} alt="lola company logo" width={120} />
        <Image src={park} alt="lola company logo" width={120} />
        <Image src={vienna} alt="lola company logo" width={120} />
        <Image src={ags} alt="lola company logo" width={120} />
        <Image src={lola} alt="lola company logo" width={120} />
      </div>
    </section>
  );
};

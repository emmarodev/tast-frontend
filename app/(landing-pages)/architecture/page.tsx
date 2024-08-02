import Hero from "@/app/components/Hero";
import HeroForm from "@/app/components/HeroForm";
import Tools from "@/app/components/Tools";
import FeaturesCard from "@/app/components/FeaturesCard";
import Line from "@/app/components/Line";
import Paginate from "@/app/components/Pagination";
import { SERVER_URL } from "@/app/constants/api";
import { ArchitectureDataProps } from "./definition";

async function getData() {
  const res = await fetch(`${SERVER_URL}/user/architecture`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export default async function Architecture() {
  const { data } = await getData();
  console.log(data);

  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#231B7D] px-4 pb-10">
        <Hero image="/skyfaced.jpg">
          <Line />
          <h1 className="hero-heading">
            our
            <span className="text-[#ffb200]"> architecture</span> project
          </h1>
          <HeroForm />
        </Hero>

        <Tools />
      </header>

      <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
        <div className="mb-8 grid grid-cols-4 gap-4">
          {data.map((d: ArchitectureDataProps) => (
            <FeaturesCard key={d._id} data={d} />
          ))}
        </div>
        <Paginate />
      </main>
    </>
  );
}

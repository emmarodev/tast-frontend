import Hero from "@/app/components/Hero";
import HeroForm from "@/app/components/HeroForm";
import Tools from "@/app/components/Tools";
import ProjectCard from "@/app/components/ProjectCard";
import Line from "@/app/components/Line";
import team from "../../../public/team.jpg";
import scifi from "../../../public/scifi.jpg";
import Paginate from "@/app/components/Pagination";
import { SERVER_URL } from "@/app/constants/api";
import { Suspense } from "react";

async function getData() {
  const res = await fetch(`${SERVER_URL}/user/project`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Template() {
  const { data } = await getData();
  const images = [team];

  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#231B7D] px-4 pb-10">
        <Hero image={scifi}>
          <Line />
          <h1 className="hero-heading">
            our project And
            <span className="text-[#2A56EB]"> Technologies</span>
          </h1>
          <HeroForm />
        </Hero>

        <Tools />
      </header>

      <Suspense>
        <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
          <div className="mb-8 grid grid-cols-4 gap-4">
            {data.map((d: any, i: number) => (
              <ProjectCard key={i} data={d} image={images[0]} />
            ))}
          </div>
          <Paginate />
        </main>
      </Suspense>
    </>
  );
}

export default Template;

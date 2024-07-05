import Hero from "@/app/components/Hero";
import HeroForm from "@/app/components/HeroForm";
import Tools from "@/app/components/Tools";
import ProjectCard from "@/app/components/ProjectCard";
import Line from "@/app/components/Line";
import team from "../../../public/team.jpg";
import rally from "../../../public/rally.jpg";
import estate from "../../../public/estate.jpg";
import discuss from "../../../public/discuss.jpg";
import cloud from "../../../public/cloud.jpg";
import camp from "../../../public/camp.jpg";
import brain from "../../../public/brain.jpg";
import scifi from "../../../public/scifi.jpg";
import Paginate from "@/app/components/Pagination";

function Template() {
  const images = [
    team,
    rally,
    estate,
    discuss,
    cloud,
    camp,
    brain,
    rally,
    discuss,
    camp,
    estate,
    cloud,
  ];

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

      <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
        <div className="grid grid-cols-4 gap-4 mb-8">
          {images.map((img, i) => (
            <ProjectCard key={i} image={img} />
          ))}
        </div>
        <Paginate />
      </main>
    </>
  );
}

export default Template;

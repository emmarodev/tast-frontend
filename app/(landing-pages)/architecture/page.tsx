import Hero from "@/app/components/Hero";
import HeroForm from "@/app/components/HeroForm";
import Tools from "@/app/components/Tools";
import FeaturesCard from "@/app/components/FeaturesCard";
import Line from "@/app/components/Line";
import Paginate from "@/app/components/Pagination";
import skyfaced from "../../../public/skyfaced.jpg";

function Features() {
  let images = new Array(12).fill(undefined);

  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#231B7D] px-4 pb-10">
        <Hero image={skyfaced}>
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
          {images.map((_, i) => (
            <FeaturesCard key={i} />
          ))}
        </div>
        <Paginate />
      </main>
    </>
  );
}

export default Features;

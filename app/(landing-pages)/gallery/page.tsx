import Hero from "@/app/components/Hero";
import Line from "@/app/components/Line";
import Categories from "@/app/components/Categories";
import skyfaced from "../../../public/skyfaced.jpg";
import HeroFormWithSelect from "@/app/components/HeroFormWithSelect";
import Paginate from "@/app/components/Pagination";
import Image from "next/image";
import duplex from "../../../public/duplex.jpg";
import team from "../../../public/team.jpg";
import rally from "../../../public/rally.jpg";
import estate from "../../../public/estate.jpg";
import discuss from "../../../public/discuss.jpg";
import parallel from "../../../public/parallel.jpg";

export default function Orders() {
  let orders = new Array(12).fill(undefined);

  const categories = [
    "All",
    "Education",
    "green building",
    "health care",
    "interior design",
    "office",
    "road construction",
  ];

  const images = [duplex, team, rally, estate, discuss, parallel]

  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#231B7D] px-4 pb-10">
        <Hero image={skyfaced}>
          <Line />
          <h1 className="hero-heading">
            Exclusive Service
            <span className="text-[#ffb200]"> Gallery</span>
          </h1>
          <HeroFormWithSelect options={["Video", "Photos"]} />
        </Hero>

        <Categories categories={categories} />
      </header>

      <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
        <section className="mb-8 grid grid-cols-5 gap-10">
          {images.map((img, i) => (
            <div key={i}>
              <Image  src={img} alt='background image
              'className="" />
            </div>
          ))}
        </section>
        <Paginate />
      </main>
    </>
  );
}

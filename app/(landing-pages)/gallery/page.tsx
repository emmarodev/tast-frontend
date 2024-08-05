import Hero from "@/app/components/Hero";
import Line from "@/app/components/Line";
import Categories from "@/app/components/Categories";
import skyfaced from "../../../public/skyfaced.jpg";
import HeroFormWithSelect from "@/app/components/HeroFormWithSelect";
import Paginate from "@/app/components/Pagination";
import Image from "next/image";
import { getData } from "../action";
import { Suspense } from "react";

export default async function Orders() {
  const data = await getData("user/servicegallery");

  const categories = [
    "All",
    "Education",
    "green building",
    "health care",
    "interior design",
    "office",
    "road construction",
  ];

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
        <Suspense>
          <section className="mb-8 grid grid-cols-5 gap-10">
            {data.map((obj: any) => (
              <div key={obj._id}>
                <Image
                  src={obj.media}
                  alt="background image"
                  width={321}
                  height={312}
                  className="rounded"
                />
              </div>
            ))}
          </section>
        </Suspense>
        <Paginate />
      </main>
    </>
  );
}

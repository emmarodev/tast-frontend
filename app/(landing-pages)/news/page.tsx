import Hero from "@/app/components/Hero";
import HeroForm from "@/app/components/HeroForm";
import Line from "@/app/components/Line";
import Paginate from "@/app/components/Pagination";
import NewsCard from "@/app/components/NewsCard";
import skyfaced from "../../../public/skyfaced.jpg";
import { getData } from "../action";
import { Suspense } from "react";

async function News() {
  const data = await getData("user/blog");

  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#231B7D] px-4 pb-10">
        <Hero image={skyfaced}>
          <Line />
          <h1 className="hero-heading">
            our latest
            <span className="text-[#ffb200]"> news</span>
          </h1>
          <HeroForm />
        </Hero>
      </header>

      <Suspense>
        <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
          <div className="mb-8 grid grid-cols-4 gap-4">
            {data.map((d: any) => (
              <NewsCard key={d._id} data={d} />
            ))}
          </div>
          {/* <Paginate /> */}
        </main>
      </Suspense>
    </>
  );
}

export default News;

import Hero from "@/app/components/Hero";
import HeroForm from "@/app/components/HeroForm";
import Line from "@/app/components/Line";
import Paginate from "@/app/components/Pagination";
import NewsCard from "@/app/components/NewsCard";
import skyfaced from "../../../public/skyfaced.jpg";

function News() {
  let news = new Array(12).fill(undefined);

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

      <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
        <div className="mb-8 grid grid-cols-4 gap-4">
          {news.map((d, i) => (
            <NewsCard key={i} data={d} />
          ))}
        </div>
        <Paginate />
      </main>
    </>
  );
}

export default News;

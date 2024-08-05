import HeroForm from "@/app/components/HeroForm";
import Hero from "@/app/components/Hero";
import Line from "@/app/components/Line";
import ServiceCard from "@/app/components/ServiceCard";
import Paginate from "@/app/components/Pagination";
import skyfaced from "../../../public/skyfaced.jpg";
import { getData } from "../action";
import { Suspense } from "react";

async function Services() {
  const data = await getData("user/service");

  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#231B7D] px-4 pb-10">
        <Hero image={skyfaced}>
          <Line />
          <h1 className="hero-heading">
            our
            <span className="text-[#ffb200]"> services</span>
          </h1>
          <HeroForm />
        </Hero>
      </header>

      <Suspense>
        <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
          <section className="mb-8 grid grid-cols-4 gap-10">
            {data.length > 0 &&
              data.map((d: any) => <ServiceCard key={d._id} data={d} />)}
          </section>
          <Paginate />
        </main>
      </Suspense>
    </>
  );
}

export default Services;

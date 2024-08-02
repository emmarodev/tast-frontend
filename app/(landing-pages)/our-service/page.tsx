import HeroForm from "@/app/components/HeroForm";
import Hero from "@/app/components/Hero";
import Line from "@/app/components/Line";
import ServiceCard from "@/app/components/ServiceCard";
import Paginate from "@/app/components/Pagination";
import skyfaced from "../../../public/skyfaced.jpg";

function Services() {
  let services = new Array(12).fill(undefined);

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

      <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
        <section className="mb-8 grid grid-cols-4 gap-10">
          {services.map((d, i) => (
            <ServiceCard key={i} data={d} />
          ))}
        </section>
        <Paginate />
      </main>
    </>
  );
}

export default Services;

import Hero from "@/app/components/Hero";
import Line from "@/app/components/Line";
import Paginate from "@/app/components/Pagination";
import HeroForm from "@/app/components/HeroForm";
import skyfaced from "../../../public/skyfaced.jpg";
import EmployeeCard from "@/app/components/EmployeeCard";
import { Suspense } from "react";
import { getData } from "../action";

export default async function Employers() {
  const data = await getData("user/servicegallery");

  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#231B7D] px-4 pb-10">
        <Hero image={skyfaced}>
          <Line />
          <h1 className="hero-heading">
            Our
            <span className="text-[#ffb200]"> Employees</span>
          </h1>
          <HeroForm />
        </Hero>
      </header>

      <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
        <Suspense>
          <section className="mb-8 grid grid-cols-4 gap-10">
            {data.map((obj: any) => (
              <EmployeeCard key={obj._id} data={data} />
            ))}
          </section>
        </Suspense>
        {/* <Paginate /> */}
      </main>
    </>
  );
}

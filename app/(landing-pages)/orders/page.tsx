import Hero from "@/app/components/Hero";
import Line from "@/app/components/Line";
import Categories from "@/app/components/Categories";
import skyfaced from "../../../public/skyfaced.jpg";
import HeroFormWithSelect from "@/app/components/HeroFormWithSelect";
import Paginate from "@/app/components/Pagination";
import { SERVER_URL } from "@/app/constants/api";
import { ArchitectureDataProps } from "../architecture/definition";
import OrderCard from "@/app/components/OrderCard";

async function getData() {
  const res = await fetch(`${SERVER_URL}/user/order`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}

export default async function Orders() {
  const { data } = await getData();

  const categories = [
    "All",
    "market construction",
    "masaue construction",
    "airport construction",
    "school construction",
    "home construction",
    "road construction",
  ];

  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#231B7D] px-4 pb-10">
        <Hero image={skyfaced}>
          <Line />
          <h1 className="hero-heading">
            <span className="text-[#ffb200]">Orders</span>
          </h1>
          <HeroFormWithSelect options={["All", "App Dev", "Bug", "Orders"]} />
        </Hero>

        <Categories categories={categories} />
      </header>

      <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
        <section className="mb-8 grid grid-cols-4 gap-10">
          {data.map((d: ArchitectureDataProps) => (
            <OrderCard key={d._id} data={d} />
          ))}
        </section>
        <Paginate />
      </main>
    </>
  );
}

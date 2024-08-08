import Hero from "@/app/components/Hero";
import Line from "@/app/components/Line";
import Categories from "@/app/components/Categories";
import skyfaced from "../../../public/skyfaced.jpg";
import HeroFormWithSelect from "@/app/components/HeroFormWithSelect";
import Paginate from "@/app/components/Pagination";
import { SERVER_URL } from "@/app/constants/api";
import { ArchitectureDataProps } from "../architecture/definition";
import OrderCard from "@/app/components/OrderCard";
import { z } from "zod";

async function searchOrder(formData: FormData) {
  "use server";

  const schema = z.object({
    title: z.string().min(1, { message: "Please input your name" }),
  });

  const validateFields = schema.safeParse({
    title: formData.get("title"),
  });

  if (!validateFields.success) {
    return validateFields.error.flatten().fieldErrors;
  }

  try {
    const res = await fetch(`${SERVER_URL}/user/search/order`, {
      method: "POST",
      body: JSON.stringify(validateFields.data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();

    if (!data.status || data.status_code === 400) {
      return {
        message: [data.message || "An unknown error occurred."],
      };
    }
  } catch (error) {
    return {
      message: ["Failed to connect to the server. Please try again later."],
    };
  }
}

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

  const categories = data.map((d: { title: string; _id: string }) => {
    return { title: d.title, link: `/orders/${d._id}` };
  });

  const options = data.map((d: { title: string }) => d.title);

  return (
    <>
      <header className="flex flex-col gap-y-4 bg-[#231B7D] px-4 pb-10">
        <Hero image={skyfaced}>
          <Line />
          <h1 className="hero-heading">
            <span className="text-[#ffb200]">Orders</span>
          </h1>
          <HeroFormWithSelect options={options} action={searchOrder} />
        </Hero>

        <Categories categories={categories} />
      </header>

      <main className="bg-gradient-to-br from-[#F2E6C9] to-[#F2E6C9] p-14 pb-20">
        <section className="mb-8 grid grid-cols-4 gap-10">
          {data.map((d: ArchitectureDataProps) => (
            <OrderCard key={d._id} data={d} />
          ))}
        </section>
        {/* <Paginate /> */}
      </main>
    </>
  );
}

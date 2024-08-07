import { GrServices } from "react-icons/gr";
import { ArchitectureDataProps } from "../(landing-pages)/architecture/definition";
import ServiceCardButton from "./ServiceCardButton";

export default function ServiceCard({ data }: { data: ArchitectureDataProps }) {
  return (
    <article className="group flex h-fit flex-col items-center gap-y-2 rounded-md border border-[#B0B0B0] bg-white py-5 text-sm transition-all duration-200 hover:bg-[#ffb200]">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffb200] transition-all duration-200 group-hover:bg-black">
        <GrServices className="text-4xl text-black transition-all duration-200 group-hover:text-[#ffb200]" />
      </div>
      <h3 className="text-base font-bold capitalize">{data.title}</h3>
      <p className="text-sm">{data.description}</p>
      <ServiceCardButton data={data} />
    </article>
  );
}

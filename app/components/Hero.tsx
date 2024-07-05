import Image from "next/image";
import Overlay from "./Overlay";

export default function Hero({
  image,
  children,
}: {
  image: any;
  children: React.ReactNode;
}) {
  return (
    <section className="relative sm:py-20">
      <div className="h-full w-full items-center text-white sm:flex">
        <Image
          alt="Background image"
          src={image}
          placeholder="blur"
          quality={100}
          layout="fill"
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        <Overlay />

        <div className="z-20 flex flex-col items-start gap-y-5 rounded-none px-5 py-8 sm:rounded-[40px] sm:px-20 2xl:py-[4.625rem] 2xl:pl-[5.313rem] 2xl:pr-[7.25rem]">
          {children}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import bg from "../../public/bg.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center h-screen w-screen overflow-y-scroll py-20">
      <Image
        alt="Mountains"
        src={bg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -5,
        }}
      />
      <div className="bg-white h-fit rounded-none sm:rounded-[40px] pl-[5.313rem] pr-[7.25rem] py-[4.625rem]">
        {children}
      </div>
    </section>
  );
}

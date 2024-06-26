import Image from "next/image";
import bg from "../../public/bg.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex items-center justify-center h-screen w-screen">
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
      <div className="bg-white rounded-[40px] max-w-[865px] w-[36.3%]">{children}</div>
    </section>
  );
}

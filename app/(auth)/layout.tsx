import Image from "next/image";
import bg from "../../public/bg.jpg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-auth-bg relative h-screen max-h-screen overflow-y-auto bg-cover bg-center bg-no-repeat py-20">
      <div className="absolute left-1/2 top-1/2 w-full max-w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-white px-10 py-10">
        {children}
      </div>
    </section>
  );
}

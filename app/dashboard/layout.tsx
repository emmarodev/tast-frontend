import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Sidebar from "./components/Sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;
  if (!token) redirect("/sign-in");

  return (
    <div>
      <Navbar />
      <main className="flex h-[86vh] min-h-[86vh]">
        <Sidebar />
        <section className="w-[calc(100vw-280px)] overflow-y-auto bg-slate-100 p-10">
          <ToastContainer />
          {children}
        </section>
      </main>
    </div>
  );
}

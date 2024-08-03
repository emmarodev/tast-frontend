import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import Sidebar from "./components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

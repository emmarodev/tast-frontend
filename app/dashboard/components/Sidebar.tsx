import { FaUserAlt } from "react-icons/fa";
import NavLink from "../../components/NavLink";
import { RiReceiptFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { IoLogOut, IoSettings, IoTriangle } from "react-icons/io5";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function Sidebar() {
  const active = "bg-[#FFB200] text-black font-bold";

  return (
    <aside className="h-full w-[280px]">
      <div className="my-10 mt-5 flex items-center justify-center gap-x-4">
        <div className="h-20 w-20 rounded-full border" />
        <h3 className="text-xl font-bold">Richard</h3>
        <IoTriangle />
      </div>

      <ul className="flex flex-col gap-y-2 px-4">
        <li>
          <NavLink to="/dashboard" active={active} className="sidebar">
            <FaUserAlt className="text" />
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/orders" active={active} className="sidebar">
            <RiReceiptFill />
            Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/online-payment"
            active={active}
            className="sidebar"
          >
            <MdPayments />
            Payment
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/refund-payment"
            active={active}
            className="sidebar"
          >
            <MdPayments />
            Refund Payment
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/settings" active={active} className="sidebar">
            <IoSettings />
            Settings
          </NavLink>
        </li>
        <li>
          <form
            action={async () => {
              "use server";

              const cookiesStore = cookies();
              cookiesStore.set("token", "");
              cookiesStore.set("userId", "");

              redirect("/");
            }}
          >
            <button
              type="submit"
              className="mt-10 flex items-center gap-x-2 px-6 text-lg font-bold text-red-600 transition-all duration-75 hover:text-red-700"
            >
              <IoLogOut /> Logout
            </button>
          </form>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "./NavLink";
import { RiReceiptFill } from "react-icons/ri";
import { MdPayments } from "react-icons/md";
import { IoLogOut, IoSettings, IoTriangle } from "react-icons/io5";

function Sidebar() {
  const active = "bg-[#FFB200] text-black font-bold";

  return (
    <aside className="h-full w-[280px]">
      <div className="flex items-center gap-x-4 mt-5 my-10 justify-center">
        <div className="h-20 w-20 rounded-full border" />
        <h3 className="text-xl font-bold">Richard</h3>
        <IoTriangle />
      </div>

      <ul className="flex flex-col gap-y-2 px-4">
        <li>
          <NavLink to="/dashboard/profile" active={active} className="sidebar">
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
          <button className="mt-10 px-6 font-bold text-red-600 flex gap-x-2 items-center text-lg hover:text-red-700 transition-all duration-75">
            <IoLogOut /> Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

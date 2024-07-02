import Image from "next/image";
import logo from "../../public/logo.svg";
import NavLink from "./NavLink";

function Navbar() {
  const active = "font-bold text-white hover:text-white";

  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-[#231B7D] h-[14vh]">
      <div>
        <Image src={logo} alt="Logo" />
      </div>

      <ul className="flex gap-x-5 items-center">
        <li>
          <NavLink to="/home" className="navbar" active={active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/template" className="navbar" active={active}>
            Template
          </NavLink>
        </li>
        <li>
          <NavLink to="/architecture" active={active} className="navbar">
            Architecture
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery" active={active} className="navbar">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="/our-service" active={active} className="navbar">
            Our Service
          </NavLink>
        </li>
        <li>
          <NavLink to="/notice" active={active} className="navbar">
            Notice
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" active={active} className="navbar">
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/employer" active={active} className="navbar">
            Employer
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" active={active} className="navbar">
            Blog
          </NavLink>
        </li>
        {/* <li>
          <button className="bg-[#FFB200] text-[#231F20] font-semibold tracking-widest py-2.5 px-3 rounded-md">
            SIGN IN
          </button>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

import Image from "next/image";
import logo from "../../public/logo.svg";
import NavLink from "./NavLink";
import Link from "next/link";
import { cookies } from "next/headers";

function Navbar() {
  const active = "font-bold text-white hover:text-white";
  const cookiesStore = cookies();
  const token = cookiesStore.get("token")?.value;

  return (
    <nav className="flex h-[14vh] items-center justify-between bg-[#231B7D] px-10 py-4">
      <div>
        <Image src={logo} alt="Logo" />
      </div>

      <ul className="flex items-center gap-x-5">
        <li>
          <NavLink to="/" className="navbar" active={active}>
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
          <NavLink to="/employers" active={active} className="navbar">
            Employer
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" active={active} className="navbar">
            Blog
          </NavLink>
        </li>
        <li>
          <Link
            href={token ? "/dashboard" : "/sign-in"}
            className="rounded-md bg-[#FFB200] px-3 py-2.5 font-semibold tracking-widest text-[#231F20]"
          >
            {token ? "PROFILE" : "SIGN IN"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

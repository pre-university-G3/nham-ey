import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="">
        <img src="/Assets/Nham-Ey_Png.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <div>
          <NavLink to="/App" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : ""}>
            Home
          </NavLink>
          <NavLink to="/Foodpage"> Food</NavLink>
          <NavLink to="/Rasturantpage"> Restaurant </NavLink>
          <NavLink to="/AboutUSpage"> About Us </NavLink>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}

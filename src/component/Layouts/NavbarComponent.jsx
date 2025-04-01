
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { NavLink } from "react-router";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand  href="https://flowbite-react.com">
        <img src="/public/Assets/Nham-Ey_Png.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <div>
          <NavLink href="#" active>
            Home
          </NavLink>
          <NavLink to="/Foodpage"> Food</NavLink>
          <NavLink to="/Foodpage"> Rasturant </NavLink>
          <NavLink to="/Foodpage"> About US </NavLink>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}

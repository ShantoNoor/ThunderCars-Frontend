import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { useState } from "react";
import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import SocialLogin from "./SocialLogin";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Add Product",
      to: "/add-product",
    },
    {
      text: "My Cart",
      to: "/my-cart",
    },
    {
      text: "Sign In",
      to: "/sign-in",
    },
  ];

  return (
    <Navbar
      maxWidth={"xl"}
      // shouldHideOnScroll={true}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarContent className="hidden sm:flex" justify="end">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <NavLink info={item} />
            </NavbarItem>
          ))}
        </NavbarContent>
        <SocialLogin />
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <NavLink info={item} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;

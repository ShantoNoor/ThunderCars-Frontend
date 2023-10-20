import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Avatar,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import SocialLogin from "./SocialLogin";
import useAuth from "../utility/useAuth";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const commonMenus = [
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
  ];

  const notLoginMenus = [
    {
      text: "Sign In",
      to: "/sign-in",
    },
  ];

  const loginMenus = [
    {
      text: "Sign Out",
      to: "/sign-out",
    },
  ];

  const { user } = useAuth();

  useEffect(() => {
    user
      ? setMenuItems([...commonMenus, ...loginMenus])
      : setMenuItems([...commonMenus, ...notLoginMenus]);
  }, [user]);

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
        {user === null ? (
          <SocialLogin />
        ) : (
          <>
            <Avatar
              size="sm"
              showFallback
              name={user.displayName[0].toUpperCase()}
              isBordered
              color="primary"
              src={user.photoURL}
            />
            <NavbarItem className="text-primary font-bold hidden lg:inline">{user.displayName}</NavbarItem>
          </>
        )}
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

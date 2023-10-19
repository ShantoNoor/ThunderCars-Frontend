import { NavLink as _NavLink } from "react-router-dom";

const NavLink = ({ info }) => {
  return (
    <_NavLink
      to={info.to}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "active px-4 py-2 bg-primary text-white rounded-lg"
          : "px-4 py-2 duration-300 transition-all rounded-lg"
      }
    >
      {info.text}
    </_NavLink>
  );
};

export default NavLink;

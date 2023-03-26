import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navContainer">
      <NavLink style={{ textDecoration: "none" }} to={"/"}>
        Home
      </NavLink>
    </nav>
  );
};

export default Header;

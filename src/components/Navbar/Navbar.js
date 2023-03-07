import NavbarBfrLogin from "./NavbarbfrLogin/NavbarBfrLogin";
import NavbaraftrLogin from "./NavbaraftrLogin/NavbaraftrLogin";
import React from "react";

const Navbar = () => {
  return (
    <>
      {localStorage.getItem("@userLogin") ? (
        <NavbaraftrLogin />
      ) : (
        <NavbarBfrLogin />
      )}
    </>
  );
};

export default Navbar;

import NavbarBfrLogin from "./NavbarbfrLogin/NavbarBfrLogin";
import NavbaraftrLogin from "./NavbaraftrLogin/NavbaraftrLogin";
import React from "react";

const Navbar = () => {
  return (
    <>
      {localStorage.getItem("@userLoginCompany") || localStorage.getItem('@userLoginWorker')  ? (
        <NavbaraftrLogin />
      ) : (
        <NavbarBfrLogin />
      )}
    </>
  );
};

export default Navbar;

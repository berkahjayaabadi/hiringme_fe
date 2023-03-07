import React from "react";
import { Link } from "react-router-dom";


const NavbarBfrLogin = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <h2 className="btn btn-ghost normal-case text-xl">Peworld</h2>
      </div>
      <div className="flex-none gap-5">
        <button className="btn btn-outline btn-primary"><Link to='/Login'>Masuk</Link></button>
        <button className="btn btn-active btn-primary"><Link to='/registworker'>Daftar</Link></button>
      </div>
    </div>
  );
};

export default NavbarBfrLogin;

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-secondary text-light text-sm p-2 flex flex-wrap items-center justify-around font-poppins">
      <div className="flex items-center justify-between w-full md:w-auto md:order-2">
        <img
          src="https://res.cloudinary.com/dlrjuallw/image/upload/v1730684999/logodragons_r1ns4o.png"
          alt="Logo"
          className="h-20 w-auto"
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-light focus:outline-none p-2"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full md:flex md:items-center md:w-auto mt-2 md:mt-0`}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 md:order-1 space-y-2 md:space-y-0">
          <Link
            to="/"
            className="focus:bg-primary active:bg-primary text-light p-2 rounded"
          >
            Clientes
          </Link>
          <Link
            to="/oportunidades"
            className="focus:bg-primary active:bg-primary text-light p-2 rounded"
          >
            Oportunidades
          </Link>
          <Link
            to="/dashboard"
            className="focus:bg-primary active:bg-primary text-light p-2 rounded"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      <div className="flex items-center mt-2 md:mt-0 md:order-3">
        <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-light" />
        <span className="ml-2 pr-2 font-bold">Dragon24</span>
      </div>
    </header>
  );
}
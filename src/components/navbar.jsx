import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../components/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        {" "}
        <div className={`menu ${menuOpen ? "open" : "small"}`}>
          <ul>
            <Link to={"/"}>
              {" "}
              <li>Form</li>
            </Link>
            <Link to={"/to"}>
              <li> To-do list </li>{" "}
            </Link>
            <Link to={"/cal"}>
              <li> Calculator </li>{" "}
            </Link>
            <Link to={"/calendar"}>
              <li> Calendar </li>{" "}
            </Link>
          </ul>
        </div>
        <button className="toggle-btn" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

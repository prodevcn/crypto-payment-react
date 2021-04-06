import React from "react";
import { Link } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="mainmenu__nav">
      <ul className="mainmenu">
        <li>
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/exchange"}>Exchange</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

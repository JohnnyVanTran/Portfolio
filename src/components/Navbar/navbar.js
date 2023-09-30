import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div></div> {/* hvordan kan jeg fikse det her? */}
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem"> Travel Blog</Link>
        <Link className="desktopMenuListItem">Projects</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src="" alt="" className="desktopMenuImg" />
        Ta kontakt
      </button>
    </nav>
  );
};

export default Navbar;

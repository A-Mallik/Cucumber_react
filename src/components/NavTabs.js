import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs" >
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
          FRAMEWORK
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          PROJECT
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/blog"
          className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          ABOUT
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/"
          className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          HOME
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/contact/learn"
          className={window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >   Framework
        </Link>
      </li> */}
    </ul>
  );
}

export default NavTabs;

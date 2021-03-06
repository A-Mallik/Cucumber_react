import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <div>
    <ul className="nav nav-tabs" >
    <li className="nav-item">
        <Link
          to="/final"
          className={window.location.pathname === "/final" ? "nav-link active" : "nav-link"}
        >  FINAL WORDS
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/challenges"
          className={window.location.pathname === "/challenges" ? "nav-link active" : "nav-link"}
        >  CHALLENGES
        </Link>
      </li>
    <li className="nav-item">
        <Link
          to="/demo"
          className={window.location.pathname === "/demo" ? "nav-link active" : "nav-link"}
        >  DEMO
        </Link>
      </li>
    <li className="nav-item">
        <Link
          to="/methodology"
          className={window.location.pathname === "/methodology" ? "nav-link active" : "nav-link"}
        >  METHODOLOGY
        </Link>
      </li>
        <li className="nav-item">
        <Link
          to="/tools"
          className={window.location.pathname === "/tools" ? "nav-link active" : "nav-link"}
        >  TOOLS USED
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/framework" className={window.location.pathname === "/framework" ? "nav-link active" : "nav-link"}>
         FRAMEWORK
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/tasks"
          
          className={window.location.pathname === "/tasks" ? "nav-link active" : "nav-link"}
        >
          TASKS
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/project"
          className={window.location.pathname === "/project" ? "nav-link active" : "nav-link"}
        >
          OUR PROJECT
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
    
    </ul>
    <div id="navTab">
    </div>

    </div>
  );
}

export default NavTabs;

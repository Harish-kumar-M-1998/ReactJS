import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav id="menu">
        <ul className="animated-underline">
          <li className="nav-item mx-3">
            <Link
              to="/"
              className="nav-link active link-style"
              aria-current="page"
              href="#"
            >
              ALL
            </Link>
          </li>
          <li className="nav-item mx-3 link-style">
            <Link
              to="/FullStackDevelopment"
              className="nav-link active"
              href="#"
            >
              FULL STACK DEVELOPMENT
            </Link>
          </li>
          <li className="nav-item mx-3 link-style">
            <Link to="/DataScience" className="nav-link active" href="#">
              DATA SCIENCE
            </Link>
          </li>
          <li className="nav-item mx-3 link-style">
            <Link to="/CyberSecurity" className="nav-link active" href="#">
              CYBER SECURITY
            </Link>
          </li>
          <li className="nav-item mx-3 link-style">
            <Link to="/Career" className="nav-link active" aria-disabled="true">
              CAREER
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

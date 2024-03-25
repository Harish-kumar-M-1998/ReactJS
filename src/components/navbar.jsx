import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useUserContext } from "./Contextprovider";

const Navbar = () => {
  const { cardQuantity } = useUserContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        
          proCart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#"
                style={{
                  position: 'relative',
                  textDecoration: 'none',
                  color: '#EBEEEA',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'lightgray'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#"
                style={{
                  position: 'relative',
                  textDecoration: 'none',
                  color: '#EBEEEA',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = '#EBEEEA'}
                onMouseLeave={(e) => e.target.style.color = 'black'}
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Cart ( {cardQuantity} )
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

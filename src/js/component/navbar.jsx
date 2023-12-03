import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex ">
      <div className="container-fluid navbarContent">
        <a className="navbar-brand" href="#">
          <img
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt="img"
            className="Logo"
          />
        </a>
      </div>
      <div className="dropdown dropstart">
        <button
          className="btn btn-secondary btn-lg dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu lg">
          <li>
            <a className="dropdown-item" href="#">
              Prueba de favorito
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

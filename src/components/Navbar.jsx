import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {" "}
      <header id="header">
        <nav className="navbar navbar-expand-lg navbar-dark px-lg-5 fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img
                src="/logo.png"
                alt="Logo"
                className="d-inline-block align-text-top w-25"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              id="navbarToggler"
              className="collapse navbar-collapse w-75 justify-content-end me-3"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    href="#header"
                    className="nav-link"
                    aria-label="shopping cart"
                  >
                    <i class="fas fa-shopping-cart"></i>
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    className="nav-link"
                  >
                    <i class="fas fa-user"></i>{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={"/product"} className="nav-link">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/category"} className="nav-link">
                    Categorias
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/aboutUs"}
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    className="nav-link"
                  >
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;

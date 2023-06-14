import React from "react";

function Navbar() {
  return (
    <div>
      {" "}
      <header id="header">
        <nav className="navbar navbar-expand-lg navbar-dark px-lg-5 fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
                src="./assets/img/logo.png"
                alt="Logo"
                className="d-inline-block align-text-top w-25"
              />
            </a>
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
                  <a href="#header" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Productos
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    className="nav-link"
                  >
                    Contacto
                  </a>
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

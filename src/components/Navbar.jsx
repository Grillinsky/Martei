import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/Cart-Modal.css";

function Navbar() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [itemsCarrito, setItemsCarrito] = useState([]);

  const vaciarCarrito = () => {
    setItemsCarrito([]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

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
                  <Link to={"/productsPage"} className="nav-link">
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
            <li className="nav-item">
              <a
                href="#header"
                className="nav-link"
                aria-label="shopping cart"
                onClick={() => setMostrarCarrito(true)}
              >
                <i className="fas fa-shopping-cart"></i>
              </a>
            </li>
          </div>
          <li className="nav-item me-3">
            <Link
              to={"/profile"}
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
              className="nav-link ms-2|"
            >
              <i className="fas fa-user"></i>{" "}
            </Link>
          </li>
        </nav>
      </header>
      <Modal
        className="modal-cart"
        show={mostrarCarrito}
        onHide={() => setMostrarCarrito(false)}
      >
        <Modal.Header className="mi-modal-header">
          <Modal.Title>Carrito de compras</Modal.Title>
          <i
            className="fa fa-window-close"
            aria-hidden="true"
            onClick={() => setMostrarCarrito(false)}
          ></i>
        </Modal.Header>
        <Modal.Body className="mi-modal-body">
          {itemsCarrito.length > 0 ? (
            <ul>
              {itemsCarrito.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No hay productos en el carrito...</p>
          )}
        </Modal.Body>
        <Modal.Footer className="mi-modal-footer">
          <Button className="btn-tacho" onClick={vaciarCarrito}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => setMostrarCarrito(false)}
          >
            Cerrar
          </Button>
          <Button variant="success" onClick={vaciarCarrito}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navbar;

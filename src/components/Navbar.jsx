import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/userSlice";

import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Modal,
  Button,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../css/Cart-Modal.css";

function NavBar() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [itemsCarrito, setItemsCarrito] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const vaciarCarrito = () => {
    setItemsCarrito([]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div>
      {" "}
      <header id="header">
        <Navbar
          style={{ backgroundColor: "var(--black)" }}
          expand="lg"
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand href="/" className="p-2">
              <img
                src="/logoFinal.png"
                alt="Logo"
                className="d-inline-block align-text-top w-25"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              style={{ color: "white !important" }}
              aria-controls="navbarToggler"
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "white", fontSize: "2rem" }}
              />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarToggler">
              <Nav className="ms-auto">
                <Nav.Link className="nav-item" href="/productsPage">
                  Productos
                </Nav.Link>
                {/* DROPDOWN MENU */}
                <NavDropdown
                  title="Categorias"
                  id="navDropdown"
                  className="custom-dropdown"
                >
                  <NavDropdown.Item
                    style={{
                      fontSize: "1rem",
                    }}
                    href="#action/3.1"
                  >
                    Muebles
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ fontSize: "1rem" }}
                    href="#action/3.2"
                  >
                    Cuadros
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ fontSize: "1rem" }}
                    href="#action/3.3"
                  >
                    Espejos
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav-item"
                    style={{ fontSize: "1rem" }}
                    href="#action/3.4"
                  >
                    Luminarias
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav-item"
                    style={{ fontSize: "1rem" }}
                    href="#action/3.4"
                  >
                    Tapices
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/aboutUs" className="nav-item">
                  Nosotros
                </Nav.Link>
                <Nav.Link
                  className="nav-item"
                  href="#header"
                  aria-label="shopping cart"
                  onClick={() => setMostrarCarrito(true)}
                >
                  <i className="fas fa-shopping-cart fa-lg position-relative">
                    <span
                      id="badge"
                      class="position-absolute start-100 translate-middle  bg-danger rounded-circle"
                    >
                      <span>0</span>
                    </span>
                  </i>
                </Nav.Link>
                <NavDropdown
                  title={<FontAwesomeIcon icon={faUser} />}
                  id="profile-dropdown"
                  className="custom-dropdown"
                  menuClassName="custom-dropdown-menu"
                >
                  <Dropdown.Item className="fs-6">
                    <Link to="/profile" className="fs-6">
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout} className="fs-6">
                    Logout
                  </Dropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
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
          <Button className="btn-tacho" onClick={clearCart}>
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

export default NavBar;

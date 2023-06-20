import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/Cart-Modal.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function NavBar() {
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
                <Nav.Link href="/productsPage">Productos</Nav.Link>
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
                    style={{ fontSize: "1rem" }}
                    href="#action/3.4"
                  >
                    Luminarias
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ fontSize: "1rem" }}
                    href="#action/3.4"
                  >
                    Tapices
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/aboutUs">Nosotros</Nav.Link>
                <Nav.Link
                  href="#header"
                  aria-label="shopping cart"
                  onClick={() => setMostrarCarrito(true)}
                >
                  <i className="fas fa-shopping-cart"></i>
                </Nav.Link>
                <Nav.Link href="/profile" className="me-3">
                  <i className="fas fa-user"></i>
                </Nav.Link>
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

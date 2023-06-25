import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/userSlice'

import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import '../css/Cart-Modal.css'
import CartModal from './CartModal'

function NavBar() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false)
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/login')
  }

  return (
    <div>
      {' '}
      <header id="header">
        <Navbar
          style={{ backgroundColor: 'var(--black)' }}
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
              style={{ color: 'white !important' }}
              aria-controls="navbarToggler"
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: 'white', fontSize: '2rem' }}
              />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarToggler">
              <Nav className="ms-auto">
                <Nav.Link className="nav-item" href="/productsPage">
                  Productos
                </Nav.Link>
                {/* DROPDOWN MENU */}
                <NavDropdown
                  title="Categorías"
                  id="navDropdown"
                  className="custom-dropdown"
                >
                  <NavDropdown.Item
                    href="/category/list/1"
                    className="nav-item"
                    style={{ fontSize: '1rem' }}
                  >
                    Muebles
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/category/list/3"
                    className="nav-item"
                    style={{ fontSize: '1rem' }}
                  >
                    Cuadros
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/category/list/2"
                    className="nav-item"
                    style={{ fontSize: '1rem' }}
                  >
                    Espejos
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/category/list/4"
                    className="nav-item"
                    style={{ fontSize: '1rem' }}
                  >
                    Luminaria
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/category/list/5"
                    className="nav-item"
                    style={{ fontSize: '1rem' }}
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
                      className={`position-absolute start-100 translate-middle bg-danger rounded-circle ${
                        cartItemsCount === 0 ? 'd-none' : ''
                      }`}
                    >
                      <span>{cartItemsCount}</span>
                    </span>
                  </i>
                </Nav.Link>
                <NavDropdown
                  title={<FontAwesomeIcon icon={faUser} />}
                  id="profile-dropdown"
                  className="custom-dropdown"
                  menuclassname="custom-dropdown-menu"
                >
                  <NavDropdown.Item className="nav-item">
                    <a href="/profile" className="fs-6">
                      Profile
                    </a>
                  </NavDropdown.Item>
                  <Dropdown.Divider />
                  <NavDropdown.Item className="nav-item">
                    <Link to="#/profile/mensjaes" className="fs-6">
                      Mis Mensajes
                    </Link>
                  </NavDropdown.Item>
                  <Dropdown.Divider />
                  <NavDropdown.Item className="nav-item">
                    {' '}
                    <Link to="#/profile/pedidos" className="fs-6">
                      Mis Pedidos
                    </Link>
                  </NavDropdown.Item>
                  <Dropdown.Divider />
                  <NavDropdown.Item
                    onClick={handleLogout}
                    className="fs-6 nav-item"
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <CartModal
        mostrarCarrito={mostrarCarrito}
        setMostrarCarrito={setMostrarCarrito}
      />
    </div>
  )
}

export default NavBar

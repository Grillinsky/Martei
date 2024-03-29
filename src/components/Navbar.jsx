import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom'
import { logoutUser } from '../../redux/userSlice'
import axios from 'axios'

import { Navbar, Nav, Container, NavDropdown, Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import '../css/Cart-Modal.css'
import CartModal from './CartModal'

function NavBar() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  const cartItemsCount = useSelector(state =>
    state.cart.reduce((acc, p) => acc + p.qty, 0)
  )

  const presentacionRef = useRef(null)
  const location = useLocation()

  const handleScroll = () => {
    window.scrollTo({
      top: presentacionRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const handleNavClick = () => {
    if (location.pathname === '/') {
      handleScroll()
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/category`
      )
      const { categories } = response.data
      setCategories(categories)
    } catch (error) {
      console.error(error)
    }
  }

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/login')
  }

  return (
    <div>
      {' '}
      <header id="header">
        <Navbar id="navContainer" expand="lg" fixed="top">
          <Container fluid>
            <NavLink to="/" className="p-0">
              <img
                src="/logoFinal.png"
                alt="Logo"
                className="d-inline-block align-text-top w-25"
              />
            </NavLink>
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
              <Nav className="ms-auto py-2 align-items-center">
                <NavLink className="nav-item p-2" to="/productsPage">
                  Productos
                </NavLink>
                {/* DROPDOWN MENU */}
                <NavDropdown
                  title="Categorías"
                  id="navDropdown"
                  className="custom-dropdown"
                >
                  {categories.map(category => (
                    <NavLink
                      key={category.id}
                      to={`/category/list/${category.id}`}
                      className="nav-item dropdown-item"
                      style={{ fontSize: '1rem' }}
                    >
                      {category.name}
                    </NavLink>
                  ))}
                </NavDropdown>
                <NavLink
                  to="/#presentacion"
                  className="nav-item p-2"
                  onClick={handleNavClick}
                >
                  Nosotros
                </NavLink>
                <NavLink
                  className="nav-item p-2"
                  to="#header"
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
                </NavLink>
                <NavDropdown
                  title={<FontAwesomeIcon icon={faUser} />}
                  id="profile-dropdown"
                  className="custom-dropdown"
                  menuclassname="custom-dropdown-menu"
                >
                  <NavDropdown.Item className="nav-item">
                    <Link to={'/profile'} className="fs-6">
                      Profile
                    </Link>
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
                    <Link to="/history" className="fs-6">
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

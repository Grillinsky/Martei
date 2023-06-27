import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
/* import { useForm } from "react-hook-form"; */
import "../css/OffCanvas.css"

function OffCanvas() {
  const [show, setShow] = useState(false)
  //const { setValue } = useForm();

  const handleLogin = () => {
    setValue('username', 'pabloperez@gmail.com')
    setValue('password', '123')
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button id="offCanvasButton" onClick={handleShow}>
        Sobre el proyecto
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className="off-canvas-header">
          <Offcanvas.Title className="title-canvas">
            Proyecto final Martei.
          </Offcanvas.Title>
          <i
            className="fa fa-window-close"
            onClick={handleClose}
            aria-hidden="true"
          ></i>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container container-off-canvas">
            <h1 className="fs-2">Sobre Este Proyecto:</h1>
            <dd className="fs-6">
              Martei es un e-commerce creado como proyecto final del Bootcamp de
              HackAcademy Fue desarrolado durante 3 semanas por 4 estudiantes.
              Haz click para más información!
            </dd>
          </div>
          <div className="off-canvas-button-div">
            <Link to={'/aboutUs'}>
              <button className="btn-user-canvas" onClick={handleLogin}>
                Sobre Nosotros
              </button>
            </Link>
          </div>
          <hr className="m-2" />
          <div className="container container-off-canvas">
            <h1 className="fs-2">Guia De Navegacion:</h1>
            <dd className="fs-6">
              Sientete libre de navegar por este sitio, agrega productos a tu
              carrito, y finaliza tu compra logeandote con las credenciales de
              usuario:
            </dd>
            <ul className="list-off-canvas">
              <li>Usuario: User@User.com</li>
              <li>Contraseña: 123</li>
            </ul>
          </div>
          <div className="off-canvas-button-div">
            <Link to={'/login'}>
              <button className="btn-user-canvas" onClick={handleLogin}>
                Login User
              </button>
            </Link>
          </div>
          <hr className="m-2" />
          <div className="container container-off-canvas">
            <dd className="fs-6">
              Si quieres probar las funcionalidades de Admin, como crear, aditar
              o borrar ya sea categorias, productos, usuarios u ordenes puedes
              acceder con las siguientes credenciales:
            </dd>
            <ul className="list-off-canvas">
              <li>Usuario: Admin@Admin.com</li>
              <li>Contraseña: 123</li>
            </ul>
          </div>
          <div className="off-canvas-button-div">
            <Link to={'/adminLogin'}>
              <button className="btn-user-canvas" onClick={handleLogin}>
                Login Admin
              </button>
            </Link>
          </div>
          <hr id="hr-canvas" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffCanvas

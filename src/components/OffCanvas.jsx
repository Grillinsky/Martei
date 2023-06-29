import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import "../css/OffCanvas.css";
import { useDispatch, useSelector } from "react-redux";
import { setLoginValues, toggleOffCanvas } from "../../redux/loginValuesSlice";

function OffCanvas() {
 
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const loginValues = useSelector((state) => state.loginValues);
  const { isOffCanvasOpen } = loginValues;

  const handleClose = () => {
    setShow(false);
    dispatch(toggleOffCanvas(false));
  };

  const handleShow = () => {
    setShow(true);
    dispatch(toggleOffCanvas(true));
  };

  const handleLogin = () => {
    const loginData = {
      user: "User@user.com",
      password: "123",
    };

    const query = new URLSearchParams(loginData).toString();
    const loginUrl = `/login?${query}`;

    dispatch(setLoginValues(loginData));
    navigate(loginUrl);
  };

  return (
    <>
      <Button id="offCanvasButton" onClick={handleShow}>
        Sobre el proyecto
      </Button>

      <Offcanvas show={isOffCanvasOpen} onHide={handleClose} placement="end">
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
            <h1 className="fs-4 mb-1">Sobre Este Proyecto:</h1>
            <dd className="fs-6 fw-normal">
            Martei es un e-commerce creado como proyecto final del Bootcamp de HackAcademy. Fue desarrollado durante 3 semanas por 4 estudiantes. ¡Haz clic para obtener más información!
            </dd>
          </div>
          <div className="off-canvas-button-div">
            <Link to={"/aboutUs"}>
              <button className="m-0 btn-user-canvas">
                Sobre nosotros
              </button>
            </Link>
          </div>
          <hr className="m-1" />
          <div className="container container-off-canvas">
            <h1 className="fs-4" id="text-guia-class">Guia De Navegacion:</h1>
            <dd className="fs-6">
            Siéntete libre de navegar por este sitio, agregar productos a tu carrito y finalizar tu compra iniciando sesión con las credenciales de usuario:
            </dd>
            <ul className="list-off-canvas">
              <li className="fw-normal">Usuario: User@user.com</li>
              <li className="fw-normal">Contraseña: 123</li>
            </ul>
          </div>
          <div className="off-canvas-button-div">
              <button className="btn-user-canvas" onClick={handleLogin}>
                Loguear como User
              </button>
          </div>
          <hr className="m-1" />
          <div className="container container-off-canvas">
            <dd className="fs-6">
            Si quieres probar las funcionalidades de administrador, como crear, editar o borrar categorías, productos, usuarios u órdenes, puedes acceder con las siguientes credenciales:
            </dd>
            <ul className="list-off-canvas">
              <li className="fw-normal">Usuario: Admin@admin.com</li>
              <li className="fw-normal" >Contraseña: 123</li>
            </ul>
          </div>
          <div className="off-canvas-button-div">
            <Link to={`${import.meta.env.VITE_ADMIN_URL}/login`}>
              <button className="btn-user-canvas">
                Loguearte como Admin
              </button>
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
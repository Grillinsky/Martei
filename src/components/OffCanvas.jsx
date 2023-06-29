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
            <h1 className="fs-3">Sobre Este Proyecto:</h1>
            <dd className="fs-6 fw-normal">
              Martei es un e-commerce creado como proyecto final del Bootcamp de
              HackAcademy Fue desarrolado durante 3 semanas por 4 estudiantes.
              Haz click para más información!
            </dd>
          </div>
          <div className="off-canvas-button-div">
            <Link to={"/aboutUs"}>
              <button className="btn-user-canvas">
                Sobre Nosotros
              </button>
            </Link>
          </div>
          <hr className="m-1" />
          <div className="container container-off-canvas">
            <h1 className="fs-3" id="text-guia-class">Guia De Navegacion:</h1>
            <dd className="fs-6">
              Sientete libre de navegar por este sitio, agrega productos a tu
              carrito, y finaliza tu compra logeandote con las credenciales de
              usuario:
            </dd>
            <ul className="list-off-canvas">
              <li className="fw-normal">Usuario: User@user.com</li>
              <li className="fw-normal">Contraseña: 123</li>
            </ul>
          </div>
          <div className="off-canvas-button-div">
              <button className="btn-user-canvas" onClick={handleLogin}>
                Login User
              </button>
          </div>
          <hr className="m-1" />
          <div className="container container-off-canvas">
            <dd className="fs-6">
              Si quieres probar las funcionalidades de Admin, como crear, aditar
              o borrar ya sea categorias, productos, usuarios u ordenes puedes
              acceder con las siguientes credenciales:
            </dd>
            <ul className="list-off-canvas">
              <li className="fw-normal">Usuario: Admin@admin.com</li>
              <li className="fw-normal" >Contraseña: 123</li>
            </ul>
          </div>
          <div className="off-canvas-button-div">
            <Link to={`${import.meta.env.VITE_ADMIN_URL}/login`}>
              <button className="btn-user-canvas">
                Login Admin
              </button>
            </Link>
          </div>
          <hr id="hr-canvas" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
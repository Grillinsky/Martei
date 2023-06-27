import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button id="offCanvasButton" onClick={handleShow}>
        Sobre el proyecto
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Proyecto final Martei.</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="border container">
            <dd>
              Bienvenid@ al proyecto, desde aquí tendrás 2 opciones, ingresar
              como User:
            </dd>
            <ul>
              <li>User: pabloperez@gmail.com</li>
              <li>Password: 123</li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;

import React from "react";
import "../css/Product.css";
import { Button, ButtonGroup } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Product() {
  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center p-5">
        <div className="row" style={{ marginTop: "3rem" }}>
          <div className="col-12 col-md-6 col-lg-8 text-dark d-flex align-items-center justify-content-center">
            <img className="Item img-fluid" src="Mueble4.jpg" alt="Items" />
          </div>
          <div
            className="col-lg-4 col-md-6 text-white d-md-flex flex-column"
            style={{ backgroundColor: "var(--black)" }}
          >
            {/* <div className="d-flex justify-content-end align-items-end mx-3 div-text-product">
              <h1 className="fs-6 text-product">Martei - Ecommerce</h1>
            </div>
            <img
              src="/logo.png"
              alt="Logo"
              className="d-inline-block align-text-top img-product"
            /> */}
            <hr style={{ backgroundColor: "lightgrey", margin: "0" }} />
            <div className="div-text-description">
              <p className="text-description">
                ¡Añadí un toque de originalidad a tu hogar con la butaca
                Honguito de Martei! 😍 Con su diseño divertido y comodidad, será
                el lugar perfecto para relajarte mientras disfrutas de tu tiempo
                libre 📖☕️ ¡Conseguilo hoy mismo en nuestro showroom!
                #butacahonguito #martei #diseñoúnico #comodidad #mimbre #hierro
                #acogedor
              </p>
            </div>
            <hr style={{ backgroundColor: "lightgrey", margin: "0" }} />
            <div className="div-text-caracterics">
              <dd>Caracteristicas:</dd>
              <ul className="li-caracterics-product">
                <li className="ul-caracterics">· Estructura: Metal Pintado</li>
                <li className="ul-caracterics">· Asiento: Cuero Natural</li>
                <li className="ul-caracterics">· Uso: Residencial</li>
                <li className="ul-caracterics">· Medidas: 70x70cm</li>
                <li className="ul-caracterics">· Precio: 9.99 $USD</li>
              </ul>
            </div>
            <hr style={{ backgroundColor: "lightgrey", margin: "0" }} />
            <ButtonGroup className="d-flex justify-content-around">
              <Button className="me-2" variant="success">
                Comprar
              </Button>
              <Button
                style={{
                  backgroundColor: "var(--primary-color)",
                  border: "0",
                  color: "var(--black)",
                }}
                className="ms-2"
              >
                Al Carrito
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;

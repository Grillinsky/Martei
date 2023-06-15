import React from "react";
import "../css/Product.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Product() {
  return (
    <div>
      <Navbar />
      <div className="container-product">
        <div
          className="shadow-lg mt-5 ms-5 d-flex"
          style={{ height: "80vh", width: "55vw" }}
        >
          <div
            className="col-12 col-lg-12 col-md-8 bg-white text-dark d-flex align-items-center justify-content-center"
            style={{ width: "33vw" }}
          >
            <img className="Item" src="Mueble4.jpg" alt="Items" />
          </div>
          <div
            className="container-product-two col-lg-6 col-md-4 d-none text-white d-md-flex flex-column"
            style={{ backgroundColor: "#000" }}
          >
            <div className="d-flex justify-content-end align-items-end text-align-center mx-3 div-text-product">
              {" "}
              <h1 className="fs-6 text-product">Martei - Ecommerce</h1>
            </div>
            <img
              src="/logo.png"
              alt="Logo"
              className="d-inline-block align-text-top img-product"
            />
            <hr style={{ backgroundColor: "lightgrey" }} />
            <div className="div-text-description">
              <p className="text-description">
                ¡Añadí un toque de originalidad a tu hogar con la butaca
                Honguito de Martei!😍 Con su diseño divertido y comodidad, será
                el lugar perfecto para relajarte mientras disfrutas de tu tiempo
                libre 📖☕️ ¡Conseguilo hoy mismo en nuestro showroom!
                #butacahonguito #martei #diseñoúnico #comodidad #mimbre #hierro
                #acogedor
              </p>
            </div>
            <hr className="mt-2" style={{ backgroundColor: "lightgrey" }} />
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
            <hr className="mt-4" style={{ backgroundColor: "lightgrey" }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;

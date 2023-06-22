import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";

import "../css/Product.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Product() {
  const { id } = useParams();
  const [productIndividualData, setProductIndividualData] = useState(null);

  useEffect(() => {
    getProductIndividual();
  }, []);

  async function getProductIndividual() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product/${id}`
      );
      const productIndividualData = response.data;

      setProductIndividualData(productIndividualData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar />
      {productIndividualData && (
        <div className="container-fluid d-flex justify-content-center align-items-center py-5">
          <div id="ItemContainer" className="row" style={{ marginTop: "3rem" }}>
            <div
              className="col-12 col-md-6 col-lg-8 text-dark d-flex p-0 align-items-center justify-content-center"
              style={{ backgroundColor: "transparent" }}
            >
              <img
                className="Item img-fluid"
                src={`${import.meta.env.VITE_API_URL}/img/${
                  productIndividualData.image
                }`}
                alt="Items"
              />
            </div>
            <div
              className="col-12 col-lg-4 col-md-6 text-white d-flex flex-column align-content-between"
              style={{ backgroundColor: "var(--white)" }}
            >
              <div className="d-flex justify-content-between align-items-end">
                <img
                  src="/logoFinal.png"
                  alt="Logo de Martei"
                  className="logo"
                />{" "}
                <h1 className="fs-6 text-product">Martei - Ecommerce</h1>
              </div>

              <hr className="dividor-black" style={{ margin: "0" }} />
              <div className="div-text-description">
                <p className="text-description">
                  {productIndividualData.description}
                </p>
              </div>
              <hr className="dividor-black" style={{ margin: "0" }} />
              <div className="div-text-caracterics">
                <dd className="dd-caracterics-style">Caracteristicas:</dd>
                <ul className="li-caracterics-product">
                  <li className="ul-caracterics">
                    · Estructura: Metal Pintado
                  </li>
                  <li className="ul-caracterics">· Asiento: Cuero Natural</li>
                  <li className="ul-caracterics">· Uso: Residencial</li>
                  <li className="ul-caracterics">· Medidas: 70x70cm</li>
                  <li className="price-product"> Precio: 9.99 $USD</li>
                </ul>
              </div>
              <hr className="dividor-black" style={{ margin: "0" }} />
              <ButtonGroup className="d-flex justify-content-around my-3">
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
            <hr className="dividor-black" style={{ margin: "0" }} />
            <div className="div-text-caracterics">
              <dd className="dd-caracterics-style">Caracteristicas:</dd>
              <ul className="li-caracterics-product">
                <li className="ul-caracterics">· Estructura: Metal Pintado</li>
                <li className="ul-caracterics">· Asiento: Cuero Natural</li>
                <li className="ul-caracterics">· Medidas: 70x70cm</li>
                <li className="ul-caracterics">
                  · Stock: {productIndividualData.stock}
                </li>
                <li className="ul-caracterics">
                  · Product Destacado:{productIndividualData.salient}
                </li>
                <li className="price-product">
                  · Price: $USD{productIndividualData.price}
                </li>
              </ul>
            </div>
            <hr className="dividor-black" style={{ margin: "0" }} />
            <ButtonGroup className="d-flex justify-content-around my-3">
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
      )}
      <Footer />
    </div>
  );
}

export default Product;

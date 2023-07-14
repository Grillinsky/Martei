import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import "../css/Product.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { AddOrIncrement } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FloatingBackBtn from "../components/FloatingBackBtn";

function Product() {
  const { id } = useParams();
  const [productIndividualData, setProductIndividualData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cartToast, setCartToast] = useState(false);

  useEffect(() => {
    getProductIndividual();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(AddOrIncrement(product));

    setCartToast(true);
    toast.success(`¡Se agregó ${product.name} al carrito!`);

    console.log("Added to cart", product);
  };
  const handleBuy = (product) => {
    dispatch(AddOrIncrement(product));
    navigate("/order");
  };

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
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
          <div id="ItemContainer" className="row" style={{ marginTop: "3rem" }}>
            <div
              className="col-12 col-md-6 col-lg-8 text-dark d-flex p-0 align-items-center justify-content-center"
              style={{ backgroundColor: "transparent" }}
            >
              <img
                className="Item img-fluid"
                src={`${import.meta.env.VITE_IMAGES_URL}${
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
                <h1 className="fs-6 text-product">Martei</h1>
              </div>

              <hr className="dividor-black" style={{ margin: "0" }} />
              <div className="div-text-description">
                <p className="text-description">
                  {productIndividualData.description}
                </p>
              </div>
              <hr className="dividor-black mb-3" style={{ margin: "0" }} />
              <p className="price-product text-warning">
                {" "}
                Precio: Us${productIndividualData.price}
              </p>
              <hr className="dividor-black" style={{ marginBlock: "auto" }} />
              <ButtonGroup className="d-flex justify-content-around my-3">
                <Button
                  className="me-2 btn-buy-product"
                  variant="success"
                  onClick={() => handleBuy(productIndividualData)}
                >
                  Comprar
                </Button>
                <Button
                  style={{
                    backgroundColor: "var(--primary-color)",
                    border: "0",
                    color: "var(--black)",
                  }}
                  className="ms-2 btn-buy-cart"
                  onClick={() => handleAddToCart(productIndividualData)}
                >
                  Al carrito!
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      )}
      <FloatingBackBtn />
      <Footer />
    </div>
  );
}

export default Product;

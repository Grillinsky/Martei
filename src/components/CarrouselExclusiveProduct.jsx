import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/CarrouselProductExclusive.css";

const ExclusiveProductSection = () => {
  const navigate = useNavigate();
  const [productData, setProducts] = useState([]);

  useEffect(() => {
    productList();
  }, []);

  async function productList() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product`
      );
      const products = response.data.products;
      setProducts(products);
    } catch (error) {
      console.error(error);
    }
  }

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  const carouselSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-2 container-fluid" id="exclusiveProduct">
      <div className="container w-75 d-flex justify-content-between align-items-center mt-2 mb-3">
        <h2 className="mt-3 title-exclusive-product">Productos destacados!</h2>
        <Link to={"/productsPage"}>
          <button className="btn-dark-product-exclusive">
            Todos los productos <i className="fas fa-chevron-right"></i>
          </button>
        </Link>
      </div>
      <div className="container">
        <Slider {...carouselSettings} id="slider">
          {productData.map((product) => (
            <div
              key={product.id}
              className="ExclusiveProductColumn"
              onClick={() => handleViewProduct(product.id)}
            >
              {/* Contenido del producto */}
              <img
                src={`${import.meta.env.VITE_IMAGES_URL}${product.image}`}
                alt={`Foto de ${product.name}`}
              />
              <h5 className="category-exclusive-product">{product.category}</h5>
              <h3 className="name-exclusive-product">{product.name}</h3>
              <p className="price-exclusive-product text-warning">
                Us${product.price}🔥
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ExclusiveProductSection;

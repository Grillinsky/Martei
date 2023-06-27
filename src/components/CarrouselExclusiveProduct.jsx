import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import axios from "axios";

const ExclusiveProductSection = () => {
  const [productData, setProducts] = useState([]);

  useEffect(() => {
    productList();
  }, []);

  async function productList() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/product`);
      const products = response.data.products;
      setProducts(products);
    } catch (error) {
      console.error(error);
    }
  }

  const carouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
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
      <div className="d-flex justify-content-around align-items-center mt-2 mb-3">
        <h2 className="mt-3 title-exclusive-product">
          Productos destacados!
        </h2>
        <Link to={"/productsPage"}>
          <button className="btn-dark-product-exclusive me-5">
            Todos los productos <i className="fas fa-chevron-right"></i>
          </button>
        </Link>
      </div>
      <div className="container">
        <Slider {...carouselSettings}>
          {productData.map((product) => (
            <div key={product.id} className="ExclusiveProductColumn card">
              {/* Contenido del producto */}
              <img src={product.image} alt={product.name} />
              <h5 className="category-exclusive-product">{product.category}</h5>
              <h3 className="name-exclusive-product">{product.name}</h3>
              <p className="price-exclusive-product">Price: ${product.price}🔥</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ExclusiveProductSection;
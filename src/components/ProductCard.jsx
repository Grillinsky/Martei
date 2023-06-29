import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddOrIncrement } from "../../redux/cartSlice";
import "../css/Home.css";
import { Link } from "react-router-dom";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    listProducts();
  }, []);

  async function listProducts() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/product`
      );
      const productList = Array.isArray(response.data.products)
        ? response.data.products
        : [];
      setProducts(productList);
    } catch (error) {
      console.error(error);
    }
  }
  const handleAddToCart = (product) => {
    dispatch(AddOrIncrement(product));
    console.log("Added to cart", product);
  };
  return (
    <div className="m-2 mt-3">
      <div className="row">
        {Array.isArray(products) ? (
          products.map((product) => (
            <div key={product.id} className="col-12 col-md-4 col-lg-3 my-3">
              <Card>
                <Card.Img
                  variant="top"
                  src={`${import.meta.env.VITE_API_URL}/img/${product.image}`}
                  style={{ height: "18rem", objectFit: "cover" }}
                />
                <Card.Body
                  style={{
                    backgroundColor: "white",
                    borderEndEndRadius: "22px",
                    borderEndStartRadius: "22px",
                  }}
                >
                  <Card.Title style={{ color: "black", fontWeight: "900" }}>
                    {product.name}
                  </Card.Title>
                  <Card.Text className="card-text">
                    {product.description}
                  </Card.Text>
                  <Link to={`/product/${product.id}`}>
                    <button
                      className="btn btn-outline-dark text-black"
                      style={{
                        color: "white",
                        borderRadius: "7px",
                      }}
                    >
                      Ver Producto
                    </button>
                  </Link>
                  <ButtonGroup className="d-flex justify-content-around mt-2">
                    <Button className="me-2 rounded" variant="success">
                      Comprar
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "var(--primary-color)",
                        border: "0",
                        color: "var(--black)",
                      }}
                      className="ms-2 rounded"
                      onClick={() => handleAddToCart(product)}
                    >
                      Al carrito!
                    </Button>
                  </ButtonGroup>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h1>No hay stock</h1>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

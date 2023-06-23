import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductCard() {
  const [products, setProducts] = useState([]);

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
                <Card.Body style={{ backgroundColor: "white" }}>
                  <Card.Title style={{ color: "black", fontWeight: "900" }}>
                    {product.name}
                  </Card.Title>
                  <Card.Text style={{ color: "black", height:"16.5r|em" }}>
                    {product.description}
                  </Card.Text>
                  <Link to={`/product/${product.id}`}>
                    <Card.Link
                      style={{
                        color: "black",
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      → Ver producto ←
                    </Card.Link>
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
                    >
                      Al Carrito
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

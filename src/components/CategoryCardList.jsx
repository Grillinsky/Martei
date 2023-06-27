import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

function CategoryCard() {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    categoryList();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log("Added to cart", product);
  };

  async function categoryList() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/category/list/${categoryId}`
      );
      const productList = Array.isArray(response.data) ? response.data : [];
      setProducts(productList);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="m-2 mt-3 d-flex justify-content-center">
      <div className="row w-75">
        {Array.isArray(products) ? (
          products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 my-3">
              <Card
                style={{
                  minWidth: "20.5rem",
                }}
              >
                <Card.Img
                  variant="top"
                  src={`${import.meta.env.VITE_API_URL}/img/${product.image}`}
                  style={{ height: "18rem", objectFit: "cover" }}
                />
                <Card.Body style={{ backgroundColor: "white" }}>
                  <Card.Title style={{ color: "black", fontWeight: "900" }}>
                    {product.name}
                  </Card.Title>
                  <Card.Text style={{ color: "black", minHeight: "16.5rem" }}>
                    {product.description}
                  </Card.Text>
                  <Link to={`/product/${product.id}`}>
                    <Button
                      style={{
                        backgroundColor: "transparent",
                        border: "0",
                        color: "black",
                        fontSize: "1rem",
                        fontWeight: "600",
                      }}
                    >
                      → Ver producto ←
                    </Button>
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

export default CategoryCard;

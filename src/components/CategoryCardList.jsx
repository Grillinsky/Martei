import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CategoryCard() {
    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);

  useEffect(() => {
    categoryList();
  }, []);

  async function categoryList() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/category/list/${categoryId}`);
      const productList = Array.isArray(response.data) ? response.data : [];
      setProducts(productList);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="m-2 mt-3">
      <div className="row">
        {Array.isArray(products) ? (
          products.map(product => (
            <div key={product.id} className="col-sm-3 m-3">
              <Card style={{ width: "23.5rem", marginBottom:"30px", marginRight:"10px", marginLeft:"10em" }}>
                <Card.Img variant="top" src={`${import.meta.env.VITE_API_URL}/img/${product.image}`} style={{ height: "18rem", objectFit: "cover" }}/>
                <Card.Body style={{ backgroundColor: "white" }}>
                  <Card.Title style={{ color: "black", fontWeight: "900", }}>
                    {product.name}
                  </Card.Title>
                  <Card.Text style={{ color: "black", height:"16.5rem" }}>
                    {product.description}
                  </Card.Text>
                  <Link to={`/product/${product.id}`}>
                  <Button
                    style={{
                      backgroundColor:"transparent",
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

export default CategoryCard;
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function ProductCard() {
  return (
    <div className="m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/Mueble4.jpg" />
        <Card.Body style={{ backgroundColor: "var(--black)" }}>
          <Card.Title style={{ color: "var(--white)" }}>
            Butaca Honguito
          </Card.Title>
          <Card.Text style={{ color: "var(--white)" }}>
            Con su diseño divertido y comodidad, será el lugar perfecto para
            relajarte mientras disfrutas de tu tiempo libre
          </Card.Text>
          <Card.Link
            style={{
              color: "var(--white)",
              fontSize: "1rem",
              fontWeight: "600",
            }}
            href="/product"
          >
            Ver producto
          </Card.Link>
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
        </Card.Body>
      </Card>
      {/* 
        img
        name
        price
        description
        buy button
        add to cart button
        
    
    */}
    </div>
  );
}

export default ProductCard;

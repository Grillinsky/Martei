import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  AddOrIncrement,
  RemoveOrDecrement,
  clearCart,
  RemoveFromCart,
} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function CartModal(props) {
  const itemsCarrito = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate(`/order`);
  };

  const handleIncrement = (product) => {
    dispatch(AddOrIncrement(product));
  };

  const handleDecrement = (productId) => {
    dispatch(RemoveOrDecrement(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    console.log("Carrito vacio");
  };

  const handleRemoveItem = (productId) => {
    dispatch(RemoveFromCart(productId));
  };
  return (
    <div>
      <Modal
        className="modal-cart"
        show={props.mostrarCarrito}
        onHide={() => props.setMostrarCarrito(false)}
      >
        <Modal.Header className="mi-modal-header">
          <Modal.Title>Carrito de compras</Modal.Title>
          <i
            className="fa fa-window-close"
            aria-hidden="true"
            onClick={() => props.setMostrarCarrito(false)}
          ></i>
        </Modal.Header>
        <Modal.Body className="mi-modal-body">
          {itemsCarrito.length > 0 ? (
            <ul className="p-0">
              {itemsCarrito.map((item, index) => {
                return (
                  <li key={index} className="row">
                    <span className="col-4">{item.name}</span>
                    <span className="col-4">
                      <button
                        className="fs-3 btn btn-link p-0 m-0 more-less"
                        onClick={() => handleDecrement(item.id)}
                        aria-label="Minus Button"
                      >
                        <i className="fas fa-minus-circle"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control-sm w-25 text-center"
                        value={item.qty}
                      />
                      <button
                        className="fs-3 btn btn-link p-0 m-0 more-less"
                        onClick={() => handleIncrement(item)}
                        aria-label="Add Button"
                      >
                        <i className="fas fa-plus-circle"></i>
                      </button>
                    </span>
                    <span className="col-4">
                      U${item.price * item.qty}{" "}
                      <i
                        className="far fa-times-circle"
                        onClick={() => handleRemoveItem(item.id)}
                      ></i>
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No hay productos en el carrito...</p>
          )}
        </Modal.Body>
        <div className="text-end p-4 fw-bold">
          Total a pagar: U$
          {itemsCarrito.reduce((acc, p) => acc + p.qty * p.price, 0)}
        </div>
        <Modal.Footer className="mi-modal-footer">
          <Button className="btn-tacho" onClick={handleClearCart}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => props.setMostrarCarrito(false)}
          >
            Cerrar
          </Button>
          <Button variant="success" onClick={handleOrder}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartModal;

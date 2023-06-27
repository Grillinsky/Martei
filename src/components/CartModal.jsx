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
            <ul>
              {itemsCarrito.map((item, index) => {
                return (
                  <li key={index} className="d-flex justify-content-between">
                    <span>{item.name}</span>
                    <span>
                      <button
                        className="fs-3 btn btn-link p-0 m-0 more-less"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="form-control-sm w-25"
                        value={item.qty}
                      />
                      <button
                        className="fs-3 btn btn-link p-0 m-0 more-less"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </span>
                    <span>U${item.price * item.qty}</span>

                    <button onClick={() => handleRemoveItem(item.id)}>
                      Eliminar
                    </button>
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

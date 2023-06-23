import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/cartSlice";

function CartModal(props) {
  const itemsCarrito = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const precioFinal = () => {
    try {
      return itemsCarrito.reduce(
        (total, item) => total + parseFloat(item.price),
        0
      );
    } catch (error) {
      console.error("Error calculating total price:", error);
      return 0; // Return a default value in case of an error
    }
  };
  const handleClearCart = (product) => {
    dispatch(clearCart());
    console.log("Carrito vacio");
  };
  return (
    <div>
      {" "}
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
              {itemsCarrito.map((item, index) => (
                <li key={index} className="d-flex justify-content-between">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay productos en el carrito...</p>
          )}
        </Modal.Body>
        <div className="text-end p-4 fw-bold">
          Total a pagar: ${precioFinal().toFixed(2)}
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
          <Button variant="success">Comprar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartModal;

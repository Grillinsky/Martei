import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, clearCart } from '../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

function CartModal(props) {
  const itemsCarrito = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState({})
  const navigate = useNavigate()

  const handleOrder = () => {
    navigate(`/order`)
  }

  useEffect(() => {
    if (itemsCarrito && itemsCarrito.length > 0) {
      const initialQuantity = {}
      itemsCarrito.forEach(item => {
        if (item && item.id) {
  
          initialQuantity[item.id] = (initialQuantity[item.id] || 0) + 1
        }
      })
      setQuantity(initialQuantity)
    }
  }, [itemsCarrito])

  const precioFinal = () => {
    try {
      return uniqueItemsCarrito.reduce(
        (total, item) =>
          total + parseFloat(item.price) * (quantity[item.id] || 0),
        0
      )
    } catch (error) {
      console.error('Error calculating total price:', error)
      return 0 
    }
  }

  const uniqueItemsCarrito = itemsCarrito
    ? Array.from(new Set(itemsCarrito.map(item => item && item.id))).map(id => {
        return itemsCarrito.find(item => item && item.id === id)
      })
    : []

  const handleIncrement = productId => {
    const product = uniqueItemsCarrito.find(item => item.id === productId)
    if (product) {
      dispatch(addToCart(product))
      setQuantity(prevQuantity => ({
        ...prevQuantity,
        [productId]: (prevQuantity[productId] || 0) + 1
      }))
    }
  }

  const handleDecrement = productId => {
    if (productId) {
      if (quantity[productId] === 1) {
        dispatch(removeFromCart(productId))
        setQuantity(prevQuantity => {
          const { [productId]: _, ...rest } = prevQuantity
          return rest
        })
      } else {
        setQuantity(prevQuantity => ({
          ...prevQuantity,
          [productId]: (prevQuantity[productId] || 0) - 1
        }))
      }
    }
  }

  const handleClearCart = () => {
    dispatch(clearCart())
    console.log('Carrito vacio')
  }

  const handleRemoveItem = productId => {
    setQuantity(prevQuantity => {
      const { [productId]: _, ...rest } = prevQuantity
      return rest
    })
  }
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
          {uniqueItemsCarrito.length > 0 && itemsCarrito ? (
            <ul>
              {uniqueItemsCarrito.map((item, index) => {
                const productQuantity =
                  item && quantity[item.id] ? quantity[item.id] : 0
                if (productQuantity === 0) {
                  return null
                }
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
                        value={productQuantity}
                        onChange={e => {
                          const value = parseInt(e.target.value)
                          setQuantity(prevQuantity => ({
                            ...prevQuantity,
                            [item.id]: value >= 0 ? value : 0
                          }))
                        }}
                      />
                      <button
                        className="fs-3 btn btn-link p-0 m-0 more-less"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </span>
                    <span>U${item.price}</span>
                    {productQuantity === 0 && (
                      <button onClick={() => handleRemoveItem(item.id)}>
                        Eliminar
                      </button>
                    )}
                  </li>
                )
              })}
            </ul>
          ) : (
            <p>No hay productos en el carrito...</p>
          )}
        </Modal.Body>
        <div className="text-end p-4 fw-bold">
          Total a pagar: U${precioFinal().toFixed(2)}
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
  )
}

export default CartModal

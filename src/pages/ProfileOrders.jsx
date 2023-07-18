import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/Profile.css'
import FloatingBackBtn from '../components/FloatingBackBtn'

import moment from 'moment'

function OrdersProfile() {
  const user = useSelector(state => state.user)
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      fetchOrders()
    }
  }, [user])

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/order/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`
          }
        }
      )
      const ordersData = response.data.orders

      setOrders(ordersData)
      console.log()
    } catch (error) {
      console.error(error)
    }
  }

  function calculateOrderTotal(order) {
    return order.products
      .reduce((total, product) => {
        return total + product.price * product.qty
      }, 0)
      .toFixed(2)
  }

  return (
    <div>
      <Navbar />
      <div id="container-product-order">
        <h1>Órdenes de Compra</h1>
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Orden de Compra</th>
                <th>Fecha</th>
                <th>Producto</th>
                <th>Imagen</th>
                <th>Estado</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td className="">{order.id}</td>
                  <td>
                    {moment(order.createdAt).format('DD-MM-YYYY HH:mm')}
                  </td>{' '}
                  <td>
                    {order.products.map(product => (
                      <div className="" key={product.id}>
                        <p className="mt-2 fw-bold">{product.name}</p>
                        <p>Cantidad: {product.qty}</p>
                        <p>Subtotal: {product.price * product.qty}</p>
                      </div>
                    ))}
                  </td>
                  <td>
                    {order.products.map(product => (
                      <div key={product.id}>
                        <img
                          className="img-orden-buy"
                          src={`${import.meta.env.VITE_IMAGES_URL}${
                            product.image
                          }`}
                          alt={product.name}
                        />
                      </div>
                    ))}
                  </td>
                  <td>{order.state}</td>
                  <td className="text-center price-td">
                    {calculateOrderTotal(order)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FloatingBackBtn />
      <Footer />
    </div>
  )
}

export default OrdersProfile

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { AddOrIncrement } from '../../redux/cartSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CategoryCard() {
  const { categoryId } = useParams()

  const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [cartToast, setCartToast] = useState(false)

  useEffect(() => {
    categoryList()
  }, [])

  useEffect(() => {
    categoryList()
  }, [categoryId])

  const handleAddToCart = product => {
    dispatch(AddOrIncrement(product))

    setCartToast(true)
    toast.success(`¡Se agregó ${product.name} al carrito!`)

    console.log('Added to cart', product)
  }
  const handleBuy = product => {
    dispatch(AddOrIncrement(product))
    navigate('/order')
  }

  async function categoryList() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/category/list/${categoryId}`
      )
      const productList = Array.isArray(response.data) ? response.data : []
      setProducts(productList)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mt-3 py-5 d-flex justify-content-center">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <div className="row w-75">
        {Array.isArray(products) ? (
          products.map(product => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 my-3">
              <Card
                style={{
                  marginBlock: '1rem'
                }}
              >
                <Card.Img
                  variant="top"
                  src={`${import.meta.env.VITE_IMAGES_URL}${product.image}`}
                  style={{ height: '18rem', objectFit: 'cover' }}
                />
                <Card.Body
                  className=""
                  style={{
                    backgroundColor: 'white',
                    borderEndEndRadius: '22px',
                    borderEndStartRadius: '22px'
                  }}
                >
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div
                      className="mb-2"
                      style={{
                        color: 'black',
                        fontWeight: '900',
                        fontSize: '20px'
                      }}
                    >
                      {product.name}
                    </div>
                    <div className="fw-bolder fs-5 text-warning">
                      Us${product.price}
                    </div>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <button
                      className="mt-2 mb-1 btn btn-outline-dark text-black"
                      style={{
                        color: 'white',
                        borderRadius: '7px'
                      }}
                    >
                      Ver Producto
                    </button>
                  </Link>
                  <ButtonGroup className="d-flex justify-content-around mt-2">
                    <Button
                      className="me-2 rounded"
                      variant="success"
                      onClick={() => handleBuy(product)}
                    >
                      Comprar
                    </Button>
                    <Button
                      style={{
                        backgroundColor: 'var(--primary-color)',
                        border: '0',
                        color: 'var(--black)'
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
  )
}

export default CategoryCard

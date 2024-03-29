import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../css/Home.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExclusiveProductSection from '../components/CarrouselExclusiveProduct'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Home() {
  const [showToast, setShowToast] = useState(false)
  const isLoggedIn = useSelector(state => state.user !== null)

  const presentacionRef = useRef(null)

  useEffect(() => {
    if (isLoggedIn) {
      setShowToast(true)
      toast.success('¡Bienvenido a Martei!')
    }
  }, [isLoggedIn])

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({
        top: presentacionRef.current.offsetTop,
        behavior: 'smooth'
      })
    }

    if (window.location.hash === '#presentacion') {
      handleScroll()
    }
  }, [])

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <Navbar />
      <article className="container-fluid mt-2">
        <h1 className="hero-title fade-in-top">
          m<span>artei</span>.
        </h1>{' '}
        {/* TO DO agregar animacion */}
        <p className="hero-paragraph">
          Piezas en materiales nobles y fibras naturales <br />
          LOCAL Y ARTESANAL
        </p>
      </article>
      <main className="container-fluid p-0">
        <ExclusiveProductSection />
        <section className="container-fluid d-grid gap-5" id="productos">
          <div className="container row-container w-75 category-container">
            <div className="row">
              <div className="col-lg-8 rounded p-5 product-category">
                <h2>Muebles</h2>
                <p className="fade-in-left">
                  Un interior práctico y espacioso fue lo que nos pidieron🤎
                  Nuestros muebles se adaptan a tus necesidades, contanos qué
                  precisas y diseñamos juntos el mueble indicado para vos 😊 en
                  las medidas y características que más te convengan.
                </p>
                <Link
                  className="text-dark category-link"
                  to={'/category/list/1'}
                >
                  Ver todo <i className="fas fa-chevron-right"></i>
                </Link>
              </div>
              <div className="col-lg-4 rounded productCarrousel">
                <div
                  id="mueblesCarrouselFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/MueblesFinal3.jpeg"
                        className="w-100 rounded-img-class"
                        alt="Colgante de techo, en hilo y madera"
                      />
                    </div>
                    {/*  <div className="carousel-item">
                      <img
                        src="/Mueble2.jpg"
                        className="d-block w-100"
                        alt="Banquetas altas, de mimbre e hilo"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Mueble3.jpg"
                        className="d-block w-100"
                        alt="Coleccion de tapiceria en mueble de madera"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Mueble6.jpg"
                        className="d-block w-100"
                        alt="Sillas circulares 'hongo' de mimbre y metal"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Mueble7.png"
                        className="d-block w-100"
                        alt="Hamaca colgante de mimbre"
                      />
                    </div> */}
                  </div>
                  {/* <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#mueblesCarrouselFade"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#mueblesCarrouselFade"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container row-container w-75 category-container">
            <div className="row">
              <div className="col-lg-4 border rounded productCarrousel-two">
                <div
                  id="cuadrosCarrouselFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/Cuadro1.png"
                        className="w-100 rounded-img-class-2"
                        alt="Coleccion de cuadros de madera"
                      />
                    </div>
                    {/* <div className="carousel-item">
                      <img
                        src="/Cuadro2.png"
                        className="d-block w-100"
                        alt="Cuadro de madera con acentos en blanco"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Cuadro3.png"
                        className="d-block w-100"
                        alt="Coleccion de cuadros en proceso"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Cuadro4.png"
                        className="d-block w-100"
                        alt="Al frente en la imagen: cuadro de madera con acentos en negro. Al fondo de la imagen, cuadro de madera con acentos en blanco"
                      />
                    </div> */}
                  </div>
                  {/* <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#cuadrosCarrouselFade"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#cuadrosCarrouselFade"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button> */}
                </div>
              </div>
              <div className="col-lg-8 border rounded p-5 product-category-two">
                <h2>Cuadros</h2>
                <p className="fade-in-right">
                  Nuestros cuadros son piezas que transforman y embellecen
                  cualquier espacio. Son esos elementos distintivos de cada
                  hogar, que los vuelve únicos y llena de personalidad
                </p>
                <Link
                  className="text-dark category-link"
                  to={'/category/list/3'}
                >
                  Ver todo <i className="fas fa-chevron-right mx-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="container row-container w-75 category-container">
            <div className="row">
              <div className="col-lg-8 border rounded p-5 product-category">
                <h2>Espejos</h2>
                <p className="fade-in-left">
                  🤎 ¿Sabías que todos nuestros espejos son únicos? No existe
                  uno igual a otro, y en lo personal creo que es uno de los
                  atributos más valiosos que sólo lo artesanal nos da
                </p>
                <Link
                  className="text-dark category-link"
                  to={'/category/list/2'}
                >
                  Ver todo <i className="fas fa-chevron-right mx-2"></i>
                </Link>
              </div>
              <div className="col-lg-4 border rounded productCarrousel">
                <div
                  id="espejosCarrouselFade"
                  className="carousel slide carousel-fade "
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/EspejosFinal5.jpeg"
                        className="w-100 rounded-img-class"
                        alt="Espejo cuadrado con cuadro clasico en madera"
                      />
                    </div>
                    {/* <div className="carousel-item">
                      <img
                        src="/Espejo2.jpg"
                        className="d-block w-100"
                        alt="Espejo circular con decoracion en mimbre en forma de aros"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Espejo4.jpg"
                        className="d-block w-100"
                        alt="Espejo circular de gran tamaño, con un borde cobrizo"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Espejo3.jpg"
                        className="d-block w-100"
                        alt="Espejo cuadrado grande compuesto por 9 espejos en filas de 3"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Espejo5.jpg"
                        className="d-block w-100"
                        alt="Espejo circular con decoracion de mimbre en forma de rayos"
                      />
                    </div> */}
                  </div>
                  {/* <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#espejosCarrouselFade"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#espejosCarrouselFade"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="container row-container w-75 category-container">
            <div className="row">
              <div className="col-lg-4 border rounded productCarrousel-two">
                <div
                  id="luminariasCarrouselFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/LuminariasFinal6.jpeg"
                        className="w-100 rounded-img-class-2"
                        alt="Campana de mimbre para decoracion luminaria, vista desde abajo"
                      />
                    </div>
                    {/* <div className="carousel-item">
                      <img
                        src="/Luminaria2.jpg"
                        className="d-block w-100"
                        alt="Lampara circular decorada con hilo "
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Luminaria3.jpg"
                        className="d-block w-100"
                        alt="Tres lamparas en hierro e hilo"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Luminaria4.jpg"
                        className="d-block w-100"
                        alt="Lampara circular en hierro e hilo"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Luminaria5.jpg"
                        className="d-block w-100"
                        alt="Dos campanas de mimbre"
                      />
                    </div> */}
                  </div>
                  {/* <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#luminariasCarrouselFade"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#luminariasCarrouselFade"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button> */}
                </div>
              </div>
              <div className="col-lg-8 border rounded p-5 product-category-two">
                <h2>Luminarias</h2>
                <p className="fade-in-right">
                  Con nuestras luminarias las fibras naturales vinieron para
                  quedarse 😍 La deco hoy más que nunca reivindica lo acogedor y
                  la sencillez. En ese sentido, estos materiales llevados en su
                  estado más puro aportan la nobleza y calidez que sólo la
                  naturaleza tiene 🤎✨
                </p>
                <Link
                  className="text-dark category-link"
                  to={'/category/list/4'}
                >
                  Ver todo <i className="fas fa-chevron-right mx-2"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="container w-75 row-container category-container">
            <div className="row">
              <div className="col-lg-8 border rounded p-5 product-category">
                <h2>Tapices</h2>
                <p className="ms-2 fade-in-left">
                  Nuestra tapiceria demuestra que la combinación entre elementos
                  nobles y naturales nunca puede resultar mal, en este caso,
                  madera y algodón 🤎
                </p>
                <Link
                  className="text-dark category-link"
                  to={'/category/list/5'}
                >
                  Ver todo <i className="fas fa-chevron-right mx-2"></i>
                </Link>
              </div>
              <div className="col-lg-4 border rounded productCarrousel">
                <div
                  id="tapizCarrouselFade"
                  className="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/TapizFinal3.jpeg"
                        className="w-100 rounded-img-class"
                        alt="Tapiz blanco patron de rombos"
                      />
                    </div>
                    {/* <div className="carousel-item">
                      <img
                        src="/Tapiz2.jpg"
                        className="d-block w-100"
                        alt="Tapiz blanco, con madera y patron semi-circular"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Tapiz3.jpg"
                        className="d-block w-100"
                        alt="Tapiz largo horizontal, con patrones en rombos"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Tapiz4.jpg"
                        className="d-block w-100"
                        alt="Tapiz largo vertical, con patron en semi-circulo"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Tapiz5.jpg"
                        className="d-block w-100"
                        alt="Tapiz en madera e hilo, compuesto de 3 tapices verticales angostos"
                      />
                    </div> */}
                  </div>
                  {/* <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#tapizCarrouselFade"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#tapizCarrouselFade"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-4 p-3" id="presentacion" ref={presentacionRef}>
          <div className="row-container container w-50">
            <div className="row bg-black">
              <div className="col-lg-6 align-self-center justify-content-center d-flex px-0">
                <img
                  className="fade-in-right"
                  src="/header-banner-3.jpg"
                  alt="Foto de la dueña del local, Camila, junto a una coleccion de cuadros"
                />
              </div>
              <div className="col-lg-6 px-0">
                <div id="copy" className="p-lg-3">
                  <p>
                    Soy Camila, una joven apasionada por el diseño y la
                    creatividad. Acabo de inaugurar mi propio emprendimiento de
                    artículos de diseño, donde puedo plasmar mi talento y mi
                    visión en cada detalle. Me caracterizo por ser una persona
                    segura de mí misma y siempre dispuesta a tomar riesgos para
                    alcanzar mis metas. Me encanta rodearme de cosas hermosas y
                    cuidadosamente diseñadas, y eso es precisamente lo que busco
                    ofrecer a través de mi emprendimiento. Me inspira la belleza
                    que me rodea en mi día a día, desde un paisaje natural hasta
                    una pieza de arte exquisitamente elaborada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home

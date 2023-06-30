import React, { useEffect, useState } from "react";
import "../css/Order.css";
import VisaLogo from "/visa.png";
import MastercardLogo from "/mastercard.png";
import Chip from "/chip-tarjeta.png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/Navbar";

const FormularioTarjeta = () => {
  const [showToast, setShowToast] = useState(false);
  const [cardToast, setCardToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);

  const [numeroTarjeta, setNumeroTarjeta] = useState("");
  const [nombreTarjeta, setNombreTarjeta] = useState("");
  const [mesExpiracion, setMesExpiracion] = useState("MM");
  const [yearExpiracion, setYearExpiracion] = useState("AA");
  const [ccv, setCcv] = useState("***");

  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCCVInputFocused, setIsCCVInputFocused] = useState(true);

  const user = useSelector((state) => state.user);
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  //Para llevar los datos de la compra
  const itemsCarrito = useSelector((state) => state.cart);
  const total = itemsCarrito.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const [errorTwoToast, setTwoErrorToast] = useState(itemsCarrito.length === 0);

  useEffect(() => {
    if (errorTwoToast) {
      setTwoErrorToast(true);
      toast.error(
        "Debes agregar al menos un producto para finalizar la compra"
      );
    }
  }, [errorTwoToast, itemsCarrito.length]);

  useEffect(() => {
    if (showToast) {
      setShowToast(true);
      toast.success(`¡GRACIAS POR ELEGIR MARTEI! `);
    }
  }, [showToast]);

  useEffect(() => {
    if (cardToast) {
      setCardToast(true);
      toast.error("Debes ingresar correctamente los datos de la tarjeta");
    }
  }, [cardToast]);

  useEffect(() => {
    if (errorToast) {
      setErrorToast(true);
      toast.error(
        "Debes agregar al menos un producto para finalizar la compra"
      );
    }
  }, [errorToast]);

  const handleFinalizarCompra = async (e) => {
    e.preventDefault();

    if (
      numeroTarjeta.trim() === "" ||
      nombreTarjeta.trim() === "" ||
      mesExpiracion.trim() === "" ||
      yearExpiracion.trim() === "" ||
      ccv.trim() === ""
    ) {
      setCardToast(true);
      return;
    } else {
      if (user) {
        if (itemsCarrito.length === 0) {
          setErrorToast(true);

          const timer = setTimeout(() => {
            window.location.href = "/productsPage";
          }, 3000);

          return () => clearTimeout(timer);
        }
        const orderData = {
          products: itemsCarrito,
          address: address,
          userId: user.id,
          state: "pago",
        };

        try {
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/order`,
            orderData
          );
          dispatch(clearCart());
          setShowToast(true);
        } catch (error) {
          console.error("Error al enviar la orden");
        }

        const timer = setTimeout(() => {
          window.location.href = "/";
        }, 3000);

        return () => clearTimeout(timer);
      } else {
        window.location.href = "/login";
      }
    }
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCardFlip = () => {
    setIsCardFlipped(!isCardFlipped);
  };

  const meses = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const years = ["2023", "2024", "2025", "2026"];

  const handleFormToggle = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleNumeroTarjetaChange = (e) => {
    let valorInput = e.target.value;

    valorInput = valorInput
      .replace(/\s/g, "")
      .replace(/\D/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();

    setNumeroTarjeta(valorInput);

    if (valorInput === "") {
      setNumeroTarjeta("#### #### #### ####");
    }
    setIsCardFlipped(false);
  };

  const handleNombreTarjetaChange = (e) => {
    let valorInput = e.target.value;

    valorInput = valorInput.replace(/[0-9]/g, "");

    setNombreTarjeta(valorInput);
    setIsCardFlipped(false);
  };

  const handleMesExpiracionChange = (e) => {
    setMesExpiracion(e.target.value);
  };

  const handleYearExpiracionChange = (e) => {
    setYearExpiracion(e.target.value.slice(2));
  };

  const handleCcvChange = (e) => {
    let valorInput = e.target.value;

    valorInput = valorInput.replace(/\s/g, "").replace(/\D/g, "");

    setCcv(valorInput);
    setIsCardFlipped(true); // Voltear la tarjeta a la parte delantera
  };

  useEffect(() => {
    if (user) {
      setAddress(user.address);
    }
  }, [user]);

  return (
    <div className="contenedor py-5 my-5">
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={2900}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />

      <section className={`tarjeta ${isCardFlipped ? "active" : ""}`}>
        <div className="delantera" onClick={handleCardFlip}>
          <div className="logo-marca" id="logo-marca">
            {numeroTarjeta.charAt(0) === "4" ? (
              <img src={VisaLogo} alt="Visa" />
            ) : numeroTarjeta.charAt(0) === "5" ? (
              <img src={MastercardLogo} alt="Mastercard" />
            ) : null}
          </div>
          <img src={Chip} className="chip" alt="" />
          <div className="datos">
            <div className="grupo" id="numero">
              <p className="label">Número Tarjeta</p>
              <p className="numero">{numeroTarjeta}</p>
            </div>
            <div className="flexbox">
              <div className="grupo" id="nombre">
                <p className="label">Nombre Tarjeta</p>
                <p className="nombre">{nombreTarjeta}</p>
              </div>

              <div className="grupo" id="expiracion">
                <p className="label">Expiracion</p>
                <p className="expiracion">
                  <span className="mes">{mesExpiracion}</span>{" "}
                  <span className="year">{yearExpiracion}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="trasera" onClick={handleCardFlip}>
          <div className="barra-magnetica"></div>
          <div className="datos">
            <div className="grupo" id="firma">
              <p className="label">Firma</p>
              <div className="firma">
                <p>{nombreTarjeta}</p>
              </div>
            </div>
            <div className="grupo" id="ccv">
              <p className="label">CCV</p>
              <p className="ccv">{ccv}</p>
            </div>
          </div>
          <p className="leyenda">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            exercitationem, voluptates illo.
          </p>
          <a href="#" className="link-banco">
            www.tubanco.com
          </a>
        </div>
      </section>

      <div className="contenedor-btn">
        <button
          className={`btn-abrir-formulario ${isFormOpen ? "active" : ""}`}
          onClick={handleFormToggle}
          aria-label="Plus Button"
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <form
        action=""
        id="formulario-tarjeta"
        className={`formulario-tarjeta ${isFormOpen ? "active" : ""}`}
      >
        <div className="grupo">
          <label htmlFor="inputNumero">Número Tarjeta</label>
          <input
            type="text"
            id="inputNumero"
            maxLength="19"
            autoComplete="off"
            onChange={handleNumeroTarjetaChange}
            value={numeroTarjeta}
          />
        </div>
        <div className="grupo">
          <label htmlFor="inputNombre">Nombre</label>
          <input
            type="text"
            id="inputNombre"
            maxLength="19"
            autoComplete="off"
            onChange={handleNombreTarjetaChange}
          />
        </div>
        <div className="flexbox">
          <div className="grupo expira">
            <label htmlFor="selectMes">Expiración</label>
            <div className="flexbox">
              <div className="grupo-select">
                <select
                  name="mes"
                  id="selectMes"
                  onChange={handleMesExpiracionChange}
                  defaultValue={"Mes"}
                >
                  <option>Mes</option>
                  {meses.map((mes) => (
                    <option key={mes} value={mes}>
                      {mes}
                    </option>
                  ))}
                </select>
                <i className="fas fa-angle-down"></i>
              </div>
              <div className="grupo-select">
                <select
                  name="year"
                  id="selectYear"
                  onChange={handleYearExpiracionChange}
                  defaultValue={"Año"}
                >
                  <option>Año</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <i className="fas fa-angle-down"></i>
              </div>
            </div>
          </div>

          <div className={`grupo ccv ${isCCVInputFocused ? "active" : ""}`}>
            <label htmlFor="inputCCV">CCV</label>
            <input
              type="text"
              id="inputCCV"
              maxLength="3"
              onChange={handleCcvChange}
            />
          </div>
        </div>

        <div className="border-top">
          {user ? (
            <div>
              <h3>Datos del Usuario</h3>
              <p className="m-0">
                Nombre: {user.firstname} {user.lastname}
              </p>
              <p className="m-0">Email: {user.email} </p>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="addressInput" className="form-label">
                    Dirección de envío:
                  </label>
                  <input
                    type="text"
                    id="addressInput"
                    className="form-control"
                    value={address}
                    onChange={handleAddressChange}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="alert alert-info text-danger">
                ¡Recuerda que debes loguearte para finalizar la compra!{" "}
                <Link className="text-primary" to="/login">
                  Iniciar Sesión
                </Link>
              </p>
            </div>
          )}
        </div>

        <div className="border-top mt-3">
          <h3>Detalles de la compra</h3>
          {itemsCarrito.map((item) => (
            <div key={item.id}>
              <h6 className="bg-light-subtle"> {item.name}</h6>
              <p className="m-0">
                Precio unitario: U${item.price} - Cantidad: {item.qty} - U$
                {item.price * item.qty}
              </p>
            </div>
          ))}
          <h3 className="text-end">Total a pagar: U${total}</h3>
        </div>

        <button
          type="submit"
          className="btn-enviar"
          onClick={handleFinalizarCompra}
        >
          Finalizar compra
        </button>
      </form>
    </div>
  );
};
export default FormularioTarjeta;

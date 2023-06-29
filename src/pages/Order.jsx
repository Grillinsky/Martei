import React, { useEffect, useState } from "react";
import "../css/Order.css";
import VisaLogo from "/visa.png";
import MastercardLogo from "/mastercard.png";
import Chip from "/chip-tarjeta.png";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice";

const FormularioTarjeta = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState("#### #### #### ####");
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

  const handleFinalizarCompra = async (e) => {
    e.preventDefault();

    if (user) {
      const orderData = {
        products: itemsCarrito,
        address: address,
        userId: user.id,
        state: "pago",
      };
      console.log(address);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/order`,
          orderData
        );
        dispatch(clearCart());
      } catch (error) {
        console.error("Error al enviar la orden");
      }

      window.location.href = "/";
    } else {
      window.location.href = "/login";
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
    <div className="contenedor">
      <section className={`tarjeta ${isCardFlipped} ? "active" : ""}`}>
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
            maxLength="16"
            autoComplete="off"
            onChange={handleNumeroTarjetaChange}
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
                >
                  <option disabled selected>
                    Mes
                  </option>
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
                >
                  <option disabled selected>
                    Año
                  </option>
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

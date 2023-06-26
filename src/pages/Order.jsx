import React, { useState } from "react";
import "../css/Order.css";
import VisaLogo from "/visa.png";
import MastercardLogo from "/mastercard.png";
import Chip from "/chip-tarjeta.png";

const FormularioTarjeta = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState("#### #### #### ####");
  const [nombreTarjeta, setNombreTarjeta] = useState("");
  const [mesExpiracion, setMesExpiracion] = useState("MM");
  const [yearExpiracion, setYearExpiracion] = useState("AA");
  const [ccv, setCcv] = useState("***");

  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCCVInputFocused, setIsCCVInputFocused] = useState(true);

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
  return (
    <div className="contenedor">
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
                  <span className="mes">{mesExpiracion}</span> /{" "}
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
        <button type="submit" className="btn-enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default FormularioTarjeta;

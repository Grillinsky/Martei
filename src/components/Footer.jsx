import React from "react";
import { Link } from "react-router-dom";
import MyMap from "./Map";

function Footer() {
  return (
    <footer className="container-fluid py-4 mt-1">
      <div className="row" id="footerContainer">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-4">
              <img src="/logoFinal.png" alt="Logo Martei" />
            </div>
            <div className="col-4">
              <dd className="footer-name">Catálogo</dd>
              <ul>
                <li>
                  <a href="/#muebles">Muebles</a>
                </li>
                <li>
                  <a href="/#cuadros">Cuadros</a>
                </li>
                <li>
                  <a href="/#espejos">Espejos</a>
                </li>
                <li>
                  <a href="/#luminarias">Luminarias</a>
                </li>
                <li>
                  <a href="/#Tapices">Tapices</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <dd className="footer-name">Sobre Martei</dd>
              <ul>
                <li>Nosotros</li>
                <li>Perfil</li>
                <li>Carrito</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
            <div className="col-6 col-md-6">
              <div style={{ maxHeight: "80%", maxWidth: "350px" }}>
                <MyMap />
              </div>
            </div>
            <div className="col-6 col-md-6">
              <ul>
                <li className="footer-name">
                  <Link to={"https://goo.gl/maps/ELcTZ1L7QwGNi1Lm9"}>
                    <h4> Ciudad Vieja</h4>
                  </Link>
                </li>
                <li>Montevideo</li>
                <li>099470542</li>
                <li className="p-3">
                  <a
                    aria-label="Link to Whatsapp"
                    href="https://wa.link/n6nt6k"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

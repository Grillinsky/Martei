import React from "react";
import { Link } from "react-router-dom";
import MyMap from "./Map";

function Footer() {
  return (
    <footer className="container-fluid py-4 mt-1">
      <div className="row" id="footerContainer">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-4" style={{marginTop:"40px"}}>
              <img src="/logoFinal.png" alt="Logo Martei" />
            </div>
            <div className="col-4" style={{marginTop:"5px"}}>
              <dd className="footer-name" style={{marginLeft:"31px"}}>Catálogo</dd>
              <ul>
                <li>
                  <a href="/category/list/1">Muebles</a>
                </li>
                <li>
                  <a href="/category/list/3">Cuadros</a>
                </li>
                <li>
                  <a href="/category/list/2">Espejos</a>
                </li>
                <li>
                  <a href="/category/list/4">Luminarias</a>
                </li>
                <li>
                  <a href="/category/list/5">Tapices</a>
                </li>
              </ul>
            </div>
            <div className="col-4" style={{marginTop:"30px"}}>
              <dd className="footer-name" style={{marginLeft:"31px"}}>Sobre Martei</dd>
              <ul>
                <Link to={"/aboutUs"}>
                <li>Nosotros</li>
                </Link>
                <Link to={"/profile"}>
                <li>Perfil</li>
                </Link>
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
            <div className="col-6 col-md-6 mt-4">
  <ul>
    <li className="footer-name" style={{ display: "flex", alignItems: "center" }}>
      <i className="fas fa-map-pin fs-5" style={{ marginRight: "1px" }}></i>
      <h4 className="fs-6 mt-2 ms-3">Ciudad Vieja, Montevideo</h4>
    </li>
    <li className="footer-name mt-2" style={{ display: "flex", alignItems: "center" }}>
      <i className="fas fa-phone-alt fs-6" style={{ marginRight: "8px" }}></i>
      <span className="fw-normal ms-1">099470542</span>
    </li>
    <li className="mt-3">
      <a
        aria-label="Chatea con nosotros en WhatsApp"
        href="https://wa.link/n6nt6k"
      >
       <i className="fab fa-whatsapp fs-5 ms-0 mx-1 fw-normal"></i><span className="ms-2">Chatea con nosotros</span>
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

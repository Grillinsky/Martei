import React from "react";

function Footer() {
  return (
    <footer className="container-fluid py-4">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-4">
              <img src="/logoFinal.png" alt="Logo Martei" />
            </div>
            <div className="col-4">
              <dd>Catalogo</dd>
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
              <dd>Sobre Martei</dd>
              <ul>
                <li>Legales</li>
                <li>Terminos y condiciones</li>
                <li>Devoluciones</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          {/* <h5>martei.deco</h5> */}
          <ul>
            <li>
              <a href="https://goo.gl/maps/ELcTZ1L7QwGNi1Lm9"> Ciudad Vieja</a>
            </li>
            <li>Montevideo</li>
            <li>099470542</li>
            <li>
              <a aria-label="Link to Whatsapp" href="https://wa.link/n6nt6k">
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

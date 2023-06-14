import React from "react";

function Footer() {
  return (
    <footer id="footer-about" className="container-fluid mt-2">
      <div className="row">
        <div className="col-lg-6">
          <div className="container-fluid">
            <h5 className="text-center my-4 mt-5">
              Desarrollo Web
              {/* <a target="_blank" href="https://martingrillo.netlify.app">
                Martin Grillo
              </a> */}
            </h5>
            <ul className="d-flex justify-content-center gap-4">
              <li>
                <a
                  target="_blank"
                  aria-label="LinkedIn link"
                  href="https://www.linkedin.com/in/martinegrillo/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  aria-label="Instagram link"
                  href="https://www.instagram.com/grillinski/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  aria-label="Github link"
                  href="https://github.com/Grillinsky?tab=repositories"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  aria-label="Portafolio link"
                  href="http://martingrillo.netlify.app/"
                >
                  <i className="fas fa-portrait"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  aria-label="Twitter link"
                  href="https://twitter.com/martingrillo22?s=21&t=TC-o_w-mv5uCaXEqybTBfw"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          {/* <h5>martei.deco</h5> */}
          <ul>
            <li className="mt-5">
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

import React from "react";
import "../css/About-Team.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

library.add(fab, faLinkedin, faGithub);

function AboutTeam() {
  return (
    <div className="team p-0 m-0 mb-4">
      <div className="container p-5">
        <h1 className="title-team">Nuestro Equipo</h1>
        <div className="row p-0">
          <div className="col-12 col-md-6 col-lg-3 profile text-center p-0">
            <div className="img-box social-buttons">
              <div className="card-img"></div>
              <ul>
                <li>
                  <a
                    href="https://github.com/AlexTGarcia020"
                    className="social-button github"
                  >
                    <svg
                      className="cf-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2.5 0 19 19"
                    >
                      <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alex-garcia20/"
                    className="social-button linkedin"
                  >
                    <svg
                      viewBox="0 -2 44 44"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="Icons" stroke="none" stroke-width="1">
                        <g transform="translate(-702.000000, -265.000000)">
                          <path
                            d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                            id="LinkedIn"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <h2 className="fs-3 mb-2">Alex Garcia</h2>
            <h3 className="fs-6 mt-0 text-muted">
              Full Stack Developer Web Jr
            </h3>
            <p className="description-all">
              "Hola, soy Alex Garcia, un chico de 21 años de Canelones, Uruguay.
              Estoy en Hack Academy y me encanta diseñar cosas en Front-end. Soy
              un fanático de las animaciones y siempre trato de agregar un toque
              de magia a mis proyectos. ¡Vamos a crear cosas increíbles juntos!"{" "}
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 profile text-center p-0">
            <div className="img-box social-buttons">
              <div className="card-img-2"></div>
              <ul>
                <li>
                  <a href="#" className="social-button github">
                    <svg
                      className="cf-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2.5 0 19 19"
                    >
                      <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-button linkedin">
                    <svg
                      viewBox="0 -2 44 44"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="Icons" stroke="none" stroke-width="1">
                        <g transform="translate(-702.000000, -265.000000)">
                          <path
                            d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                            id="LinkedIn"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <h2 className="fs-2 mb-2">Martin Grillo</h2>
            <h3 className="fs-6 mt-0 text-muted">
              Full Stack Developer Web Jr
            </h3>
            <p className="description-all">
              "Tengo 31 años, soy originalmente de El Calafate, Argentina, y
              actualmente vivo en Montevideo. Me encanta el Front-end y todo lo
              relacionado con el diseño: desde arquitectura hasta diseño
              industrial y textil. Soy un apasionado por la tecnologia y estoy
              hambriento de mi primera experiencia profesional"
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 profile text-center p-0">
            <div className="img-box social-buttons">
              <div className="card-img-3"></div>
              <ul>
                <li>
                  <a
                    href="https://github.com/MartinPintos677"
                    target="_blank"
                    className="social-button github"
                  >
                    <svg
                      className="cf-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2.5 0 19 19"
                    >
                      <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/martin-pintos-borba/"
                    target="_blank"
                    className="social-button linkedin"
                  >
                    <svg
                      viewBox="0 -2 44 44"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="Icons" stroke="none" stroke-width="1">
                        <g transform="translate(-702.000000, -265.000000)">
                          <path
                            d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                            id="LinkedIn"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <h2 className="fs-2 mb-2">Martin Pintos</h2>
            <h3 className="fs-6 mt-0 text-muted">
              Full Stack Developer Web Jr
            </h3>
            <p className="description-all">
              {" "}
              "Apasionado por el área de TI y ansioso por comenzar mi carrera
              profesional en este campo. Mi objetivo es crecer, contribuir con
              soluciones innovadoras, desarrollar mi talento y conocimientos en
              el ámbito de la programación y convertirme en un desarrollador
              altamente competente y exitoso."
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 profile text-center p-0">
            <div className="img-box social-buttons">
              <div className="card-img-4"></div>
              <ul>
                <li>
                  <a href="#" className="social-button github">
                    <svg
                      className="cf-icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-2.5 0 19 19"
                    >
                      <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="social-button linkedin">
                    <svg
                      viewBox="0 -2 44 44"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <g id="Icons" stroke="none" stroke-width="1">
                        <g transform="translate(-702.000000, -265.000000)">
                          <path
                            d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
                            id="LinkedIn"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <h2 className="fs-2 mb-2">Joaquin Brascesco</h2>
            <h3 className="fs-6 mt-0 text-muted">
              Full Stack Developer Web Jr
            </h3>
            <p className="description-all">
              {" "}
              "Apasionado por las matemáticas y la lógica, con 10 años como
              profesor en este campo. Ahora, descubro una nueva pasión en el
              mundo de la tecnología de la información (TI). A mis 33 años,
              resido en Montevideo desde hace 15 años. Me entusiasma embarcarme
              en un crecimiento profesional en el emocionante ámbito del
              desarrollo de software."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;

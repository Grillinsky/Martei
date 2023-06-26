import React from "react";
import "../css/About-Us.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tecnologies from "../components/Tecnologies";
import AboutTeam from "../components/AboutTeam";

function AboutUs() {
  return (
    <div>
      <div className="container-about-us col-12 row">
        <Navbar />
        <div className="container">
          <div className="d-flex justify-content-center flex-column align-items-center">
             <h1 className="title-team">Sobre Este Proyecto</h1>
                <p className="text-team-about">
                    Martei nace como proyecto final del curso Coding Bootcamp de Hack Academy,
                    instituto especializado en forjar talentos para insertarse al rubro tecnológico.
                    El Coding Bootcamp propone 3 meses de arduo trabajo extremadamente práctico,
                    dónde el estudiante dedica más de 600 horas para adquirir los conocimientos necesarios
                    para aportar a la industria, utilizando metodologías ágiles (SCRUM), simulando así un
                    entorno de trabajo real. El resultado de este proyecto se logró en solo 3 semanas,
                    dónde además de integrar los conocimientos adquiridos en el curso, nos encontramos con
                    el desafío que presenta colaborar con un equipo, coordinar y organizarse en un tiempo
                    acotado, así como ajustarse a los deadlines propuestos. Se logró cumplir tanto con los
                    objetivos de diseño, como con los objetivos de funcionamiento en su totalidad.
                </p>
              </div>
            </div>
        <AboutTeam/>
      <div className="d-flex justify-content-center flex-column align-items-center">
          <h1 className="title-team">Tecnologias</h1>
        </div>
        <Tecnologies/>
      <Footer />
    </div>
  </div>
  );
}

export default AboutUs;

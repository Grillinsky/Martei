import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Profile.css";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="container-fluid py-5 p-md-5">
        <div className="d-flex my-5">
          <div className="dark-bg-frame"></div>
          <div id="main-frame" className="row">
            <div id="menu-frame" className=" col-12 col-md-4">
              <div className="icons-profile">
                <div className="icon-container">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                  <p>General</p>
                </div>
                <div className="icon-container">
                  <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                  <p>Seguridad</p>
                </div>
                <div className="icon-container">
                  <i className="fas fa-envelope"></i> <p>Mensajes</p>
                </div>
                <div className="icon-container">
                  <i className="fa fa-history" aria-hidden="true"></i>
                  <p>Historial De Compras</p>
                </div>
              </div>
            </div>
            <div id="show-frame" className="col-12 col-md-8">
              {" "}
              {/* <h1 className="">Alex Garcia</h1> */}
              <div className="d-flex flex-column align-items-center">
                {/* <img
                  className="profile-image"
                  alt="profile picture"
                  src="./Profilephoto.png"
                />  POR FUERA DEL MVP*/}
                <div className="text-container">
                  <h2>
                    Hola <span>Alex Garcia</span>!
                  </h2>
                  <ul className="p-0">
                    <li>Av Independencia 1825</li>
                    <li>Alexgarcia@gmail.com</li>
                    <li>099299099</li>
                  </ul>
                </div>
                <div></div>
                <hr className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;

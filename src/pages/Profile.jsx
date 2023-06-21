import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Profile.css";
import { Button } from "react-bootstrap";

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
                  <p className="text-icons-profile-1">General</p>
                </div>
                <div className="icon-container">
                  <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                  <p className="text-icons-profile-2">Seguridad</p>
                </div>
                <div className="icon-container">
                  <i className="fas fa-envelope"></i>{" "}
                  <p className="text-icons-profile-3">Mensajes</p>
                </div>
                <div className="icon-container">
                  <i className="fa fa-history" aria-hidden="true"></i>
                  <p className="text-icons-profile-4">Historial De Compras</p>
                </div>
              </div>
            </div>
            <div id="show-frame" className="col-12 col-md-8">
              {" "}
              {/* <h1 className="">Alex Garcia</h1> */}
              <div className="d-flex flex-column align-items-center">
                <img
                  className="profile-image"
                  alt="profile picture"
                  src="./Profilephoto.png"
                />
                <div className="text-container">
                  <dd className="">Alex Garcia</dd>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
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

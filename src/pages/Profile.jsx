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
            <div className="menu-frame col-6 col-md-4">
              <div className="profile-images d-flex align-items-center">
                <svg
                  className="pfps"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 122.88 122.88"
                >
                  <image
                    className="img-profile"
                    href="PruebaFoto.jpg"
                    x="-2"
                    y="-45"
                    width="205%"
                    height="225%"
                  />
                </svg>
                <div className="text-container">
                  <h1 className="text-profile">Alex Garcia</h1>
                  <h2 className="text-username-profile">@Alex Garcia</h2>
                </div>
                <hr className="dividor-profile" />
              </div>
              <div className="icons-profile d-flex row">
                <div className="icon-container">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                  <p className="text-icons-profile-1">General</p>
                </div>
                <div className="icon-container">
                  <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                  <p className="text-icons-profile-2">Seguridad</p>
                </div>
                <div className="icon-container">
                  <i className="fa fa-cart-plus" aria-hidden="true"></i>
                  <p className="text-icons-profile-3">Compras</p>
                </div>
                <div className="icon-container">
                  <i className="fa fa-history" aria-hidden="true"></i>
                  <p className="text-icons-profile-4">Historial De Compras</p>
                </div>
              </div>
            </div>
            <div className="text-camp-profile">
              <h1 className="text-edit-name-profile">Editar</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;

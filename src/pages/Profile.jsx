import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Profile.css";
import { Button } from "react-bootstrap";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="col-6 d-flex">
          <div className="rectangle-5"></div>
          <div className="frame-16">
            <div className="frame-15">
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
                    x="-3"
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
            <div className="Text-Imagen-Edit-Profile">
              <h1>Avatar</h1>
            </div>
            <div className="flip-card-profile">
              <svg
                className=""
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                fill="#0b0b0b3c"
                viewBox="0 0 122.88 122.88"
              >
                <g>
                  <path d="M61.44,0c8.32,0,16.25,1.66,23.5,4.66l0.11,0.05c7.47,3.11,14.2,7.66,19.83,13.3l0,0c5.66,5.65,10.22,12.42,13.34,19.95 c3.01,7.24,4.66,15.18,4.66,23.49c0,8.32-1.66,16.25-4.66,23.5l-0.05,0.11c-3.12,7.47-7.66,14.2-13.3,19.83l0,0 c-5.65,5.66-12.42,10.22-19.95,13.34c-7.24,3.01-15.18,4.66-23.49,4.66c-8.31,0-16.25-1.66-23.5-4.66l-0.11-0.05 c-7.47-3.11-14.2-7.66-19.83-13.29L18,104.87C12.34,99.21,7.78,92.45,4.66,84.94C1.66,77.69,0,69.76,0,61.44s1.66-16.25,4.66-23.5 l0.05-0.11c3.11-7.47,7.66-14.2,13.29-19.83L18.01,18c5.66-5.66,12.42-10.22,19.94-13.34C45.19,1.66,53.12,0,61.44,0L61.44,0z M16.99,94.47l0.24-0.14c5.9-3.29,21.26-4.38,27.64-8.83c0.47-0.7,0.97-1.72,1.46-2.83c0.73-1.67,1.4-3.5,1.82-4.74 c-1.78-2.1-3.31-4.47-4.77-6.8l-4.83-7.69c-1.76-2.64-2.68-5.04-2.74-7.02c-0.03-0.93,0.13-1.77,0.48-2.52 c0.36-0.78,0.91-1.43,1.66-1.93c0.35-0.24,0.74-0.44,1.17-0.59c-0.32-4.17-0.43-9.42-0.23-13.82c0.1-1.04,0.31-2.09,0.59-3.13 c1.24-4.41,4.33-7.96,8.16-10.4c2.11-1.35,4.43-2.36,6.84-3.04c1.54-0.44-1.31-5.34,0.28-5.51c7.67-0.79,20.08,6.22,25.44,12.01 c2.68,2.9,4.37,6.75,4.73,11.84l-0.3,12.54l0,0c1.34,0.41,2.2,1.26,2.54,2.63c0.39,1.53-0.03,3.67-1.33,6.6l0,0 c-0.02,0.05-0.05,0.11-0.08,0.16l-5.51,9.07c-2.02,3.33-4.08,6.68-6.75,9.31C73.75,80,74,80.35,74.24,80.7 c1.09,1.6,2.19,3.2,3.6,4.63c0.05,0.05,0.09,0.1,0.12,0.15c6.34,4.48,21.77,5.57,27.69,8.87l0.24,0.14 c6.87-9.22,10.93-20.65,10.93-33.03c0-15.29-6.2-29.14-16.22-39.15c-10-10.03-23.85-16.23-39.14-16.23 c-15.29,0-29.14,6.2-39.15,16.22C12.27,32.3,6.07,46.15,6.07,61.44C6.07,73.82,10.13,85.25,16.99,94.47L16.99,94.47L16.99,94.47z"></path>
                </g>
              </svg>
            </div>
            <div className="btn-profile-edit-img">
              <Button className="btn-success-img">Editar Imagen</Button>
            </div>
            <hr className="dividor-camp-edit" />
            <div className="text-camp-profile">
              <h1 className="text-edit-name-profile">Editar</h1>
            </div>

            <div className="edit-inputs-profile">
              <input
                required="required"
                id="inputField"
                placeholder="Name..."
                type="text"
              ></input>
              <label className="usernameLabel" for="inputField">
                {" "}
                Name:
              </label>
              <svg viewBox="0 0 448 512" className="userIcon">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
              </svg>
            </div>
            <div className="edit-input-profile">
              <input
                required="required"
                id="inputField"
                placeholder="Username..."
                type="text"
              ></input>
              <label className="usernameLabel" for="inputField">
                {" "}
                Username:
              </label>
              <svg viewBox="0 0 448 512" className="userIcon">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
              </svg>
            </div>
            <button className="btn-input-profile">Edit Name</button>
            <button className="btn-input-profile-two">Edit Username</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;

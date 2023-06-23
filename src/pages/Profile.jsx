import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Profile.css";

function Profile() {
  const user = useSelector((state) => state.user);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    async function getProfileDataUser() {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/${user.id}`
        );
        const profileData = response.data;
        setProfileData(profileData);
      } catch (error) {
        console.error(error);
      }
    }

    if (user) {
      getProfileDataUser();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="container-fluid py-5 p-md-5">
        <div className="d-flex my-5">
          <div className="dark-bg-frame"></div>
          <div id="main-frame" className="row">
            <div id="menu-frame" className="col-12 col-md-4">
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
              <div className="text-container">
                {profileData && (
                  <div>
                    <h2>
                      Hola <span>{profileData.firstname}</span>!
                    </h2>
                    <ul className="p-0">
                      <li>{profileData.address}</li>
                      <li>{profileData.email}</li>
                      <li>{profileData.phone}</li>
                    </ul>
                  </div>
                )}
              </div>
              <hr className="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;

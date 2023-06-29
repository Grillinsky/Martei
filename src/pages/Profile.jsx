import React, {  useEffect, useState } from "react";
 import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logoutUser } from "../../redux/userSlice";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Profile.css";

function Profile() {
  const dispatch = useDispatch();
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

  const [sliderActive, setSliderActive] = useState(false);
  const toggleSlider = () => {
    setSliderActive(!sliderActive);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  
    return (
      <div>
        <Navbar/>
      <div className="wrapper mb-5">
        <div className="profile_card">
          <div className="back_btn">
            <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className={`settings_btn${sliderActive ? ' active' : ''}`} onClick={toggleSlider}>
            <i className="fas fa-cog"></i>
          </div>

          {profileData && (
          <div className="profile_wrap">
            <div className="profile_img">
              <img  src="profilephoto1.webp" alt="profile_pic" />
              <p className="name">{profileData.firstname} {profileData.lastname}</p>
              <p className="place">
                <span className="icon">
                  <i className="fas fa-map-pin"></i>
                </span>
                <span className="place_name">{profileData.address}</span>
              </p>
            </div>
  
            <div className="profile_icons">
              <div className="profile_item">
                <div className="icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <div className="title">Compras</div>
                <div className="num">6</div>
              </div>
              <div className="profile_item">
                <div className="icon">
                  <i className="fas fa-clipboard"></i>
                </div>
                <div className="title">Ordenes</div>
                <div className="num">19</div>
              </div>
              <div className="profile_item">
                <div className="icon">
                  <i className="fas fa-list"></i>
                </div>
                <div className="title">Historial</div>
                <div className="num">3</div>
              </div>
            </div>
          </div>
        )} 
        </div>
        <div className={`profile_slider${sliderActive ? ' active' : ''}`}>
          <ul>
            <li>
              <div className="slider_item">
                <div className="slider_left">
                  <div className="item">
                    <div className="item_name">Historial De Compras</div>
                  </div>
                </div>
                <div className="slider_right">
                  <i className="fas fa-history fa-2x"></i>
                </div>
              </div>
            </li>
            <li>
              <div className="slider_item">
                <div className="slider_left">
               
                  <div className="item">
                    <div className="item_name">Medios De Pago</div>
                  </div>
                </div>
                <div className="slider_right">
                  <i className="fas fa-credit-card fa-2x"></i>
                </div>
              </div>
            </li>
            <li>
              <div className="slider_item">
                <div className="slider_left">
                  <div className="item">
                    <div className="item_name">Ordenes De Compra</div>
                  </div>
                </div>
                <div className="slider_right">
                  <i className="fas fa-clipboard fa-2x"></i>
                </div>
              </div>
            </li>
            <li>
              <div className="slider_item">
                <div className="slider_left">
                  <div className="item">
                    <div className="item_name">Carrito De Compras</div>
                  </div>
                </div>
                <div className="slider_right">
                  <i className="fas fa-shopping-cart fa-2x"></i>
                </div>
              </div>
            </li>
            <li>
                <div className="slider_right d-flex justify-content-center">
                  <div onClick={handleLogout} className="btn btn-outline-danger btn-logout-profile"> <i className="fas fa-sign-out-alt"></i></div>
                </div>
            </li>
          </ul>
        </div>
      </div>
        <Footer/>
      </div>
    );
  };
  
  export default Profile;

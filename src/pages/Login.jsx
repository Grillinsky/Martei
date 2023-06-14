import React, { useState } from "react";
import '../css/Login.css'
/* import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import axios from "axios";
 */

function Login() {
  /* const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/tokens`,
        data: {
          email: emailValue,
          password: passwordValue,
        },
      });
      console.log(response.data);
      dispatch(setUser(response.data));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  } */

  return (
  {/* <div className="container-product">
      <div className="shadow-lg mt-5 ms-5 d-flex" style={{ height: "80vh", width:"69vw" }}>
        <div className="col-12 col-lg-12 col-md-8 bg-white text-dark d-flex align-items-center justify-content-center" style={{ width: "36vw" }} >
          <img className="Item" src="Mueble4.jpg" alt="Items"/>
        </div>
        <div
          className="container col-lg-6 col-md-4 d-none text-white d-md-flex align-items-start flex-column"
          style={{ backgroundColor: "#000"}}
        ></div>
      </div>
    </div> */}
  );
}

export default Login;
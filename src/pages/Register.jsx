import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/Register.css";


function Register() {
    const navigate = useNavigate();

    const [emailValue, setEmailValue] = useState("");
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [addressValue, setAddressValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
  
    async function handleSubmitRegister(event) {
      event.preventDefault();
      await axios({
        method: "POST",
        url: "http://localhost:3000/register",
        data: {
            email: emailValue,
            firstname :firstNameValue,
            lastname :lastNameValue,
            address: addressValue,
            phone: phoneValue,
            password: passwordValue,
          },
      });
      navigate("/login");
    }

  return (
    <div className="container-login">
      <div className="d-flex justify-content-center align-items-center div-register">
        <div className="form-container-register">
          <p className="title">Register</p>
          <form className="form" onSubmit={handleSubmitRegister} autoComplete="off">
            <div className="input-group">
              <label for="firstname">Firstname</label>
              <input type="text" name="firstname" id="firstname" placeholder="" value={firstNameValue} onChange={(event) => setFirstNameValue(event.target.value)} />
            </div>
            <div className="input-group">
              <label for="lastname">Lastname</label>
              <input type="text" name="lastname" id="lastname" placeholder="" value={lastNameValue} onChange={(event) => setLastNameValue(event.target.value)} />
            </div>
            <div className="input-group">
              <label for="address">Address</label>
              <input type="text" name="address" id="address" placeholder="" value={addressValue} onChange={(event) => setAddressValue(event.target.value)} />
            </div>
            <div className="input-group">
              <label for="phone">Phone</label>
              <input type="number" name="phone" id="phone" placeholder="" value={phoneValue} onChange={(event) => setPhoneValue(event.target.value)} />
            </div>
            <div className="input-group">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" placeholder="" value={emailValue} onChange={(event) => setEmailValue(event.target.value)} />
            </div>
            <div className="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
              />
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password ?
                </a>
              </div>
            </div>
            <button className="sign" type="submit">Sign Up</button>
          </form>
          <div className="social-message">
            <div className="line"></div>
          </div>
          <p className="signup">
            Don't have an account?
            <Link rel="noopener noreferrer" to={"/login"} className="Sign-Up">
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;

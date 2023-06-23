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

  const [registrationError, setRegistrationError] = useState(false);

  async function handleSubmitRegister(event) {
    event.preventDefault();

    try {
      await axios({
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/register`,
        data: {
          email: emailValue,
          firstname: firstNameValue,
          lastname: lastNameValue,
          address: addressValue,
          phone: phoneValue,
          password: passwordValue,
        },
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      setRegistrationError(true);
    }
  }

  return (
    <div className="container-login">
      <div className="d-flex justify-content-center align-items-center div-register">
        <div className="form-container-register">
          <p className="title">Register</p>
          {registrationError && (
            <div className="alert alert-danger">
              Ya existe usuario con el email indicado.
            </div>
          )}
          <form
            className="form"
            onSubmit={handleSubmitRegister}
            autoComplete="off"
          >
            <div className="input-group">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder=""
                value={firstNameValue}
                onChange={(event) => setFirstNameValue(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder=""
                value={lastNameValue}
                onChange={(event) => setLastNameValue(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder=""
                value={addressValue}
                onChange={(event) => setAddressValue(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder=""
                value={phoneValue}
                onChange={(event) => setPhoneValue(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
                required
              />
              <div className="forgot">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password ?
                </a>
              </div>
            </div>
            <button className="sign" type="submit">
              Sign Up
            </button>
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

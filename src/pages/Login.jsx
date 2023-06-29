import React, { useState } from 'react';
import '../css/Login.css';
import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { setUser } from '../../redux/userSlice';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const emailValue = query.get("user") || "";
    const passwordValue = query.get("password") || "";

    setEmailValue(emailValue);
    setPasswordValue(passwordValue);
  }, [location.search]);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: 'POST',
        url: `${import.meta.env.VITE_API_URL}/login`,
        data: {
          email: emailValue,
          password: passwordValue
        }
      });
      console.log(response.data);
      dispatch(setUser(response.data));
      navigate('/');
    } catch (error) {
      console.error(error);
      setLoginError(true);
    }
  }

  return (
    <div className="container-login">
      <div className="d-flex justify-content-center align-items-center div-login">
        <div className="form-container">
          <p className="title mt-2 mb-3">Iniciar Sesión</p>
          <form className="form" onSubmit={handleSubmit} autoComplete="off">
            <div className="input-group mb-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder=""
                value={emailValue}
                onChange={event => setEmailValue(event.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
                value={passwordValue}
                onChange={event => setPasswordValue(event.target.value)}
              />
              <div className="forgot">
                <a rel="noopener noreferrer" href="#" className="mt-2 mb-2">
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <button className="sign" type="submit">
              Ingresar
            </button>
          </form>
          {loginError && (
            <div className="mt-3 text-center alert alert-danger">Credenciales incorrectas.</div>
          )}
          <div className="social-message">
            <div className="line"></div>
            <p className="message">Ingresa con redes sociales</p>
            <div className="line"></div>
          </div>
          <div className="social-icons">
            <button aria-label="Log in with Google" className="icon">
              {/* Icono de Google */}
            </button>
            <button aria-label="Log in with Twitter" className="icon">
              {/* Icono de Twitter */}
            </button>
            <button aria-label="Log in with GitHub" className="icon">
              {/* Icono de GitHub */}
            </button>
          </div>
          <p className="signup">
            No tienes cuenta?
            <Link rel="noopener noreferrer" to={'/register'} className="Sign-Up">
              {' '}
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
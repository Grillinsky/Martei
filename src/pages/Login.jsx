import React,{ useState } from "react";
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
    <div className="container">
      <div className="row g-0 rounded overflow-hidden shadow-lg mt-5" style={{ height: "80vh" }}>
        <div
          className="container d-none col-lg-8 col-md-4 text-white d-md-flex align-items-start flex-column"
          style={{ backgroundColor: "#1d9bf0" }}
        >
          <div className="col ms-3 mt-3">
            <img
              className="mt-3"
              style={{ width: "3rem", height: "3rem" }}
              src="https://firebasestorage.googleapis.com/v0/b/noboss-app.appspot.com/o/ha.dev%2FTeam5-TwitterApp%2Flogo-twitter-white.svg?alt=media&token=386c4a48-1183-4cc7-8b66-8ad36ec10dc4"
              alt="Twitter"
            />
          </div>
          <div className="col d-flex align-items-end ms-3 mb-3">
            <strong>
              <p className="fs-5">Hi! Nice to see you again 🥰</p>
            </strong>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-8 bg-white text-dark d-flex align-items-center justify-content-center">
          <form /* onSubmit={handleSubmit} autoComplete="off" */>
            <div className="mt-5 mb-3">
              <h2 className="fw-bold">Login</h2>
              <small className="fw-semibold">Ready to start using Twitter?</small>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="name@example.com"
                /* value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)} */
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                /* value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)} */
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="d-grid gap-1 my-5">
              <button
                className="btn text-light"
                style={{ borderRadius: "45px", backgroundColor: "#1d9bf0" }}
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="my-5 text-center">
              <a
                href="/register"
                className="text-decoration-none text-dark fw-semibold"
                role="button"
              >
                Don't have an account? Sign Up.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

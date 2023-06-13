/* import { useSelector } from "react-redux"; */
import { Routes, Route } from "react-router-dom";
/* import { ProtectedRoute } from "./ProtectedRoutes";  */
import "./App.css";
/* import Home from "./pages/Home"; */
import Login from "./pages/Login";
/* import Register from "./pages/Register"; */

function App() {
      /*  const store = useSelector((state) => state);
          const user = store.user;
      */
  return (
    <>
      <Routes>
        {/* <Route element={<ProtectedRoute user={user} redirectTo="/login" />}> */}
        {/* </Route> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
       {/*  <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default App;

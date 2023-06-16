/* import { useSelector } from "react-redux"; */
import { Routes, Route } from "react-router-dom";
/* import { ProtectedRoute } from "./ProtectedRoutes";  */
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProductsPage from "./pages/ProductsPage";
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
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        {/*  <Route path="/register" element={<Register />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutes";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import ProductsPage from "./pages/ProductsPage";
import Register from "./pages/Register";
import CategoryList from "./pages/CategoryList";
import Order from "./pages/Order";
import OffCanvas from "./components/OffCanvas";
import OrdersProfile from "./pages/ProfileOrders";

function App() {
  const store = useSelector((state) => state);
  const user = store.user;
  return (
    <>
      <OffCanvas />
      <Routes>
        <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<OrdersProfile />} />          
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category/list/:categoryId" element={<CategoryList />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;

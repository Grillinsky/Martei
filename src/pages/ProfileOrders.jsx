import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Profile.css";

function OrdersProfile() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/orders`
      );
      const ordersData = response.data;

      setOrders(ordersData);
      console.log(ordersData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}

export default OrdersProfile;

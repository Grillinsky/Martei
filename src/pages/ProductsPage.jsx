import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import CartModal from "../components/CartModal";

function ProductsPage() {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const agregarAlCarrito = (item) => {
    setItemsCarrito([...itemsCarrito, item]);
    setCartItemsCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <Navbar />

      <div className="container-fluid my-5 p-5" style={{ flexWrap: "wrap" }}>
        <div className="row">
          <ProductCard addToCart={agregarAlCarrito} />
        </div>
      </div>
      <CartModal
        itemsCarrito={itemsCarrito}
        setItemsCarrito={setItemsCarrito}
        cartItemsCount={cartItemsCount}
      />

      <Footer />
    </div>
  );
}

export default ProductsPage;

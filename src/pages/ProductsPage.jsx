import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductsPage() {
  return (
    <div>
      <Navbar />

      <div
        className="container-fluid my-5 py-5 d-flex flex-wrap justify-content-around"
         style={{ display: "flex", flexWrap: "wrap" }}
      >
        <ProductCard/>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;

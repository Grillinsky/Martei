import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductsPage() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid my-5 p-5" style={{ flexWrap: "wrap" }}>
        <div className="row">
          <ProductCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;

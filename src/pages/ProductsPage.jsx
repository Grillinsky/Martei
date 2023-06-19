import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductsPage() {
  const num = 10;
  const productCards = Array.from({ length: num }, (_, index) => (
    <ProductCard key={index} />
  ));
  return (
    <div>
      <Navbar />

      <div
        className="container-fluid my-5 py-5 d-flex flex-wrap justify-content-around"
        // style={{ display: "flex", flexWrap: "wrap" }}
      >
        {productCards}
      </div>
      <Footer />
    </div>
  );
}

export default ProductsPage;

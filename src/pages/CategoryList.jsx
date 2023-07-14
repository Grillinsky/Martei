import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCardList";
import FloatingBackBtn from "../components/FloatingBackBtn";

function CategoryList() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid my-5 py-5 d-flex flex-wrap justify-content-around">
        <CategoryCard />
      </div>
      <FloatingBackBtn />
      <Footer />
    </div>
  );
}

export default CategoryList;

import { useLoaderData } from "react-router";
import HeroSlider from "./HeroSlider";
import CategoriesSlider from "./CategoriesSlider";
import ProductsList from "./ProductsList";

function HomePage() {
  const products = useLoaderData();
  return (
    <div className="mx-auto">
      <HeroSlider />
      <CategoriesSlider />
      <ProductsList allProducts={products} />
    </div>
  );
}

export default HomePage;

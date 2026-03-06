import { Link } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";

function Home() {
  return (
    <div>
      <h1>Products</h1>

      <Link to="/cart">Go To Cart</Link>

      <ProductList />
    </div>
  );
}

export default Home;
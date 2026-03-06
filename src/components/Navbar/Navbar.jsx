import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="logo">ShopEasy</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
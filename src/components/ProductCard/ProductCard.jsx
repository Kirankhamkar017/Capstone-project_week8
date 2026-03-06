import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">

      <img src={product.image} alt={product.title} />

      <h4>{product.title}</h4>

      <p className="price">${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;
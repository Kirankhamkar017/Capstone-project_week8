import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

function CartPage() {

  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "30px" }}>

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "15px"
            }}>
              <img src={item.image} width="50" />
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>

          <Link to="/checkout">
            <button style={{
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none"
            }}>
              Proceed to Checkout
            </button>
          </Link>

        </>
      )}

    </div>
  );
}

export default CartPage;
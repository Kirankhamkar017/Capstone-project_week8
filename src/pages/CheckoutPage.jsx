import { useState } from "react";
import "../styles/Checkout.css";

function CheckoutPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">

        <h1>Checkout</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>ZIP Code</label>
            <input
              type="text"
              name="zip"
              onChange={handleChange}
              required
            />
          </div>

          <button className="checkout-btn">
            Place Order
          </button>

        </form>

      </div>
    </div>
  );
}

export default CheckoutPage;
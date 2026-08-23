import "./../styles/Checkout.css";

import { useState } from "react";
import { useCart } from "./../context/CartContext";

function Checkout() {
  const { cart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Order:", {
      customer: formData,
      cart,
    });
  }

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 100 : 0;

  const total = subtotal + shipping;

  return (
    <main className="checkout">

      <h1>Checkout</h1>

      <div className="checkout-layout">

        <form
          className="checkout-form"
          onSubmit={handleSubmit}
        >
          <h2>Customer Information</h2>

          <label>
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />

          <label>
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />

          <label>
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="08xxxxxxxx"
          />

          <label>
            Address
          </label>

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your shipping address"
            rows="5"
          />

          <button
            type="submit"
            className="place-order-button"
          >
            Place Order
          </button>

        </form>

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >

              <div>
                <p>{item.title}</p>

                <span>
                  {item.quantity} × ฿
                  {item.price.toLocaleString()}
                </span>
              </div>

              <strong>
                ฿{(
                  item.price * item.quantity
                ).toLocaleString()}
              </strong>

            </div>
          ))}

          <div className="checkout-summary-row">
            <span>Subtotal</span>

            <span>
              ฿{subtotal.toLocaleString()}
            </span>
          </div>

          <div className="checkout-summary-row">
            <span>Shipping</span>

            <span>
              ฿{shipping.toLocaleString()}
            </span>
          </div>

          <div className="checkout-total">
            <span>Total</span>

            <span>
              ฿{total.toLocaleString()}
            </span>
          </div>

        </div>

      </div>

    </main>
  );
}

export default Checkout;
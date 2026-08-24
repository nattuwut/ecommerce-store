import "./../styles/Checkout.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./../context/CartContext";

function Checkout() {
  const {
    cart,
    clearCart,
  } = useCart();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const order = {
      customer: formData,
      items: cart,
      total,
      createdAt: new Date().toISOString(),
    };

    console.log("Order:", order);

    clearCart();

    navigate("/success");
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

          {errors.name && (
            <p className="form-error">
              {errors.name}
            </p>
          )}

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

          {errors.email && (
            <p className="form-error">
              {errors.email}
            </p>
          )}

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

          {errors.phone && (
            <p className="form-error">
              {errors.phone}
            </p>
          )}

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

          {errors.address && (
            <p className="form-error">
              {errors.address}
            </p>
          )}

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
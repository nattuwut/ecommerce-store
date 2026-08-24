import "./../styles/OrderSuccess.css";

import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <main className="order-success">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>
          Order Placed Successfully!
        </h1>

        <p>
          Thank you for your order.
          Your order has been received.
        </p>

        <Link
          to="/"
          className="continue-shopping-button"
        >
          Continue Shopping
        </Link>

      </div>

    </main>
  );
}

export default OrderSuccess;
import "./../styles/Cart.css";

import { useCart } from "./../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 100 : 0;

  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <main className="cart">

        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>
            Add some products to your cart
            to get started.
          </p>
        </div>

      </main>
    );
  }

  return (
    <main className="cart">

      <h1>Shopping Cart</h1>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="cart-item-info">

                <h2>{item.title}</h2>

                <p className="cart-item-price">
                  ฿{item.price.toLocaleString()}
                </p>

                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

              <p className="cart-item-total">
                ฿{(
                  item.price * item.quantity
                ).toLocaleString()}
              </p>

            </div>
          ))}

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>

            <span>
              ฿{subtotal.toLocaleString()}
            </span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>

            <span>
              ฿{shipping.toLocaleString()}
            </span>
          </div>

          <div className="summary-total">
            <span>Total</span>

            <span>
              ฿{total.toLocaleString()}
            </span>
          </div>

          <button className="checkout-button">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </main>
  );
}

export default Cart;
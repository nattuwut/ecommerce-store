import "./../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "./../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">
          ShopStore
        </Link>
      </div>

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <a href="#products">
          Products
        </a>

        <Link to="/cart">
          🛒 Cart ({cartItemCount})
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
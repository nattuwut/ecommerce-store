import "./../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "./../context/CartContext";

function Navbar() {
  const { cart } = useCart();

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

        <Link to="/">
          Products
        </Link>

        <Link to="/cart">
          🛒 Cart ({cart.length})
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
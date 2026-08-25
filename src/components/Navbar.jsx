import "./../styles/Navbar.css";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useCart } from "./../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function handleProductsClick(event) {
    event.preventDefault();

    if (location.pathname === "/") {
      document
        .getElementById("products")
        ?.scrollIntoView({
          behavior: "smooth",
        });

      return;
    }

    navigate("/");

    setTimeout(() => {
      document
        .getElementById("products")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }

  return (
    <nav className="navbar" aria-label="Main navigation">

      <div className="navbar-logo">
        <Link to="/">
          ShopStore
        </Link>
      </div>

      <ul className="navbar-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <a
            href="#products"
            onClick={handleProductsClick}
          >
            Products
          </a>
        </li>

        <li>
          <Link to="/cart">
            🛒 Cart ({cartItemCount})
          </Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;
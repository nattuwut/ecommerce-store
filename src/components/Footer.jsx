import "./../styles/Footer.css";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

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
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>ShopStore</h2>

          <p>
            Discover great products at great prices.
          </p>
        </div>

        <ul className="footer-links">

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
              Cart
            </Link>
          </li>

        </ul>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 ShopStore. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
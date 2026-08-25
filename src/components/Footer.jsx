import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>ShopStore</h2>

          <p>
            Discover great products at great prices.
          </p>
        </div>

        <div className="footer-links">

          <a href="#products">
            Products
          </a>

          <a href="/">
            Home
          </a>

        </div>

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
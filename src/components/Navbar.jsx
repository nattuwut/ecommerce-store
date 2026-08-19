import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        ShopStore
      </div>

      <div className="navbar-links">

        <a href="/">Home</a>

        <a href="/products">
          Products
        </a>

        <a href="/cart">
          🛒 Cart
        </a>

      </div>

    </nav>
  );
}

export default Navbar;
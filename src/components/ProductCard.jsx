import "./../styles/ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <Link
        to={`/products/${product.id}`}
        className="product-link"
      >
        <img
          src={product.image}
          alt={product.title}
        />

        <div className="product-info">

          <h3>{product.title}</h3>

          <p>
            ฿{product.price.toLocaleString()}
          </p>

        </div>
      </Link>

      <button>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
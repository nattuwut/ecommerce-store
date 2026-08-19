import "./../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <div className="product-info">

        <h3>{product.title}</h3>

        <p>
          ฿{product.price.toLocaleString()}
        </p>

        <button>
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;
import "./../styles/ProductDetails.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./../context/CartContext";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );

        setProduct(response.data);
      } catch (error) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="product-details">
        <p>Loading product...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="product-details">
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="product-details">

      <div className="product-details-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-details-info">

        <p className="product-category">
          {product.category}
        </p>

        <h1>
          {product.title}
        </h1>

        <p className="product-price">
          ฿{product.price.toLocaleString()}
        </p>

        <p className="product-rating">
          ⭐ {product.rating.rate}
        </p>

        <p className="product-description">
          {product.description}
        </p>

        <button
          className="add-to-cart-button"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>

    </main>
  );
}

export default ProductDetails;
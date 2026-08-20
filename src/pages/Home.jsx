import "./../styles/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

import ProductList from "./../components/ProductList";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );

        setProducts(response.data);
      } catch (error) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <main className="home">
        <p>Loading products...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="home">
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main className="home">

      <section className="hero">
        <h1>
          Find products you love.
        </h1>

        <p>
          Discover great products at great prices.
        </p>
      </section>

      <section className="products-section">

        <h2>Products</h2>

        <ProductList
          products={products}
        />

      </section>

    </main>
  );
}

export default Home;
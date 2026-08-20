import "./../styles/Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

import ProductList from "./../components/ProductList";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [search, setSearch] = useState("");

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

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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

        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="categories">

          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "active"
                  : ""
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>
          ))}

        </div>

        <ProductList
          products={filteredProducts}
        />

      </section>

    </main>
  );
}

export default Home;
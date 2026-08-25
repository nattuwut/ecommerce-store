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
  const [sort, setSort] = useState("default");

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

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory;

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sort === "price-low") {
        return a.price - b.price;
      }

      if (sort === "price-high") {
        return b.price - a.price;
      }

      if (sort === "rating") {
        return b.rating.rate - a.rating.rate;
      }

      return 0;
    });

  if (loading) {
    return (
      <main className="home">

        <div className="loading-state">

          <div className="loading-spinner"></div>

          <p>
            Loading products...
          </p>

        </div>

      </main>
    );
  }

  if (error) {
    return (
      <main className="home">

        <div className="error-state">

          <div className="error-icon">
            ⚠️
          </div>

          <h2>
            Something went wrong
          </h2>

          <p>
            {error}
          </p>

        </div>

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

      <section
        id="products"
        className="products-section"
      >

        <h2>Products</h2>

        <div className="products-controls">

          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">
              Sort: Default
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="rating">
              Rating: High to Low
            </option>
          </select>

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
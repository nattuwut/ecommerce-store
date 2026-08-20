import "./../styles/ProductList.css";
import ProductCard from "./ProductCard";

function ProductList({ products }) {

  if (products.length === 0) {
    return (
      <div className="empty-products">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="product-list">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>
  );
}

export default ProductList;
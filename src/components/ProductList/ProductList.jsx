import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

function ProductList() {
  const products = useProducts();

  if (!products || products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
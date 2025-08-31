import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products/productData.js";

const Products = () => {
  return (
    <div className="products-list">
      <h1>Our Product Categories</h1>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h2>{p.title}</h2>
            <p>{p.text}</p>
            <Link to={`/products/${p.slug}`}>Explore {p.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
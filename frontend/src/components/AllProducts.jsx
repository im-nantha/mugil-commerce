import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

const AllProducts = ({ title = "Latest Products" }) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/products?" + searchParams)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((error) => console.log(error));
  }, [searchParams]);

  return (
    <div className="all-products">
      <h2 id="products_heading">{title}</h2>
      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
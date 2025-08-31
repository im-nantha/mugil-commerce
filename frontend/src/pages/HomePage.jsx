import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Features from "../components/Features/Features";
import IntroBanner from "../components/IntroBanner/IntroBanner";
import ProductTabs from "../components/ProductTabs/ProductTabs";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/products?" + searchParams)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((error) => {
        console.log(error);
      });
  }, [searchParams]);

  return (
    <Fragment>
      <main>
        <Carousel />
        <Features />
        <IntroBanner />
        <ProductTabs />
      </main>
    </Fragment>
  );
};

export default Home;

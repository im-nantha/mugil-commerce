import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import FeaturedCollections from "../components/FeaturedCollections";
import SingleProductFeature from "../components/SingleProductFeature";
import SpecialCollections from "../components/SpecialCollections";
import SneakPeek from "../components/SneakPeek";
import AllProducts from "../components/AllProducts";
import SneakPeekCardsData from "../data/SneakPeekData.json";

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
        <FeaturedCollections />
        <SingleProductFeature />
        <SpecialCollections />
        <SneakPeek 
        SneakPeekCardsData={SneakPeekCardsData}
        SneakPeakTitle="Sneak Peek"
        />
      </main>
    </Fragment>
  );
};

export default Home;

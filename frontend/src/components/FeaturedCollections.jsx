import React from "react";
import { Link } from "react-router-dom";
import FeaturedCollectionData from "../data/FeaturedCollection.json";

function FeaturedCollectionCards(props) {
  return (
    <div className="mugil-fc-product">
      <Link to={props.featuredLink} className="fc-img-wrapper-link">
        <div className="fc-img-wrapper">
          <img src={props.featuredImage} alt="image" />
        </div>
        <div className="fc-text-wrapper">
          <p className="fc-price-title">{props.featuredTitle}</p>
          <p className="fc-price">{props.featuredRate}</p>
        </div>
      </Link>
    </div>
  );
}

function FeaturedCollections() {
  return (
    <section className="mugil-fc-container">
      <h2 className="mugil-fc-title">Featured Collections</h2>
      <div className="mugil-fc-wrapper">
        {FeaturedCollectionData.map((item, index) => (
          <FeaturedCollectionCards
            key={index}
            featuredTitle={item.featuredTitle}
            featuredImage={item.featuredImage}
            featuredLink={item.featuredLink}
            featuredRate={item.featuredRate}
          />
        ))}
      </div>
      <div className="mugil-fc-button-wrapper">
        <Link to="/" className="mugil-fc-button">
          View all
        </Link>
      </div>
    </section>
  );
}

export default FeaturedCollections;

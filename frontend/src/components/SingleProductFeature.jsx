import React from "react";
import { Link } from "react-router-dom";
import sidebanner from "../assets/images/side-banner.jpg";

function SingleProductFeature() {
  return (
    <section className="mugil-spf-container">
      <div className="mugil-spf-cover">
        <div className="spf-context">
          <h2 className="spf-title">Glass Forest - an imagined reality.</h2>
          <p className="spf-desc">
            Glass objects inspired by the natural world that connect bustling
            urban cityscapes with peaceful wilderness.
          </p>
          <Link className="spf-link" to="/">KNOW MORE</Link>
        </div>
        <div className="spf-image-wrapper">
          <img src={sidebanner} alt="image" />
        </div>
      </div>
    </section>
  );
}

export default SingleProductFeature;

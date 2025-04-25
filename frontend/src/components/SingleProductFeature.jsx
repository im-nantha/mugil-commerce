import React from "react";
import { Link } from "react-router-dom";
import sidebanner from "../assets/images/side-banner.jpg";
import useFadeInOnScroll from '../hooks/useFadeInOnScroll.js';

function SingleProductFeature() {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <section className="mugil-spf-container">
      <div ref={ref} className={`mugil-spf-cover fade-in ${isVisible ? 'visible' : ''}`}>
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

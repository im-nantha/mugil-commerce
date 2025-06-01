import React from "react";
import { Link } from "react-router-dom";
import specialimage1 from "../assets/images/paints/paint-1.png";
import specialimage2 from "../assets/images/paints/paint-2.png";
import specialimage3 from "../assets/images/paints/paint-3.png";
import specialimage4 from "../assets/images/paints/paint-4.png";
import useFadeInOnScroll from '../hooks/useFadeInOnScroll.js';

function SpecialCollections() {
  const [ref, isVisible] = useFadeInOnScroll();
  return (
    <section ref={ref} className={`mugil-spc-wrapper fade-in ${isVisible ? 'visible' : ''}`}>
      <h2 className="mugil-spc-title">Special Collections</h2>
      <div className="mugil-spc-cards-wrapper">
        <Link to="#" className="mugil-spc-cards">
          <div className="spc-img-wrapper">
            <img src={specialimage1} alt="image" />
          </div>
          <div className="spc-text-container">
            <h3 className="spc-text-title">Royale Basecoat</h3>
            <p className="spc-text-desc">
              Created to spark joy, wonder, thoughts and long conversations.
            </p>
          </div>
        </Link>
        <Link to="#" className="mugil-spc-cards">
          <div className="spc-img-wrapper">
            <img src={specialimage2} alt="image" />
          </div>
          <div className="spc-text-container">
            <h3 className="spc-text-title">Aspira</h3>
            <p className="spc-text-desc">
              Created to spark joy, wonder, thoughts and long conversations.
            </p>
          </div>
        </Link>
        <Link to="#" className="mugil-spc-cards">
          <div className="spc-img-wrapper">
            <img src={specialimage3} alt="image" />
          </div>
          <div className="spc-text-container">
            <h3 className="spc-text-title">Royale Luxury</h3>
            <p className="spc-text-desc">
              Created to spark joy, wonder, thoughts and long conversations.
            </p>
          </div>
        </Link>
        <Link to="#" className="mugil-spc-cards">
          <div className="spc-img-wrapper">
            <img src={specialimage4} alt="image" />
          </div>
          <div className="spc-text-container">
            <h3 className="spc-text-title">Royale Shine</h3>
            <p className="spc-text-desc">
              Created to spark joy, wonder, thoughts and long conversations.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default SpecialCollections;

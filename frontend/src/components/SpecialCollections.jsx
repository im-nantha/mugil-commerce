import React from "react";
import { Link } from "react-router-dom";
import specialimage1 from "../assets/images/special-collections/spc-1.jpg";
import specialimage2 from "../assets/images/special-collections/spc-2.jpg";
import specialimage3 from "../assets/images/special-collections/spc-3.jpg";

function SpecialCollections() {
  return (
    <section className="mugil-spc-wrapper">
      <h2 className="mugil-spc-title">Special Collections</h2>
      <div className="mugil-spc-cards-wrapper">
        <Link to="#" className="mugil-spc-cards">
          <div className="spc-img-wrapper">
            <img src={specialimage1} alt="image" />
          </div>
          <div className="spc-text-container">
            <h3 className="spc-text-title">Installations</h3>
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
            <h3 className="spc-text-title">Installations</h3>
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
            <h3 className="spc-text-title">Installations</h3>
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

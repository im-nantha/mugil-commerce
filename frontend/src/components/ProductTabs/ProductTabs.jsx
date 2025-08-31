import React, { useState } from "react";
import "./ProductTabs.scss";
import FeaturedCollections from "../FeaturedCollections/FeaturedCollections";


// Example components
const FirstComponent = () => <div>Content of First Tab</div>;
const SecondComponent = () => <div>Content of Second Tab</div>;
const ThirdComponent = () => <div>Content of Third Tab</div>;

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <div className="product-tabs">
      {/* Tab navigation */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "first" ? "active" : ""}`}
            onClick={() => setActiveTab("first")}
          >
            <h2>Lighting</h2>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "second" ? "active" : ""}`}
            onClick={() => setActiveTab("second")}
          >
            <h2>Paints & Adhesives</h2>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "third" ? "active" : ""}`}
            onClick={() => setActiveTab("third")}
          >
            <h2>Bath Elegance</h2>
          </button>
        </li>
      </ul>

      {/* Tab content */}
      <div className="tab-content p-3">
        {activeTab === "first" && <FeaturedCollections />}
        {activeTab === "second" && <FeaturedCollections />}
        {activeTab === "third" && <FeaturedCollections />}
      </div>
    </div>
  );
};

export default ProductTabs;

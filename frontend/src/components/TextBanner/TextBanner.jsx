import React from "react";
import './TextBanner.scss';

function TextBanner({ bannerText }) {
  return (
    <section className="text-banner">
      <div className="container">
        <div className="text-center">
          <h1 className="title">{bannerText}</h1>
          <div className="d-flex justify-content-center py-3">
            <a className="breadcrumb-item" href="/">Home</a>
            <p className="breadcrumb-item current">{bannerText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextBanner;

import React from "react";
import "./Features.scss";


const Features = () => {
  return (
    <div className="features">
      <div className="features-card-wrapper">
        <div className="features-card">
          <div className="custom-card">
            <div className="d-flex align-items-center gap-1">
              <div className="icon-round">
                <i className="bi bi-truck"></i>
              </div>
              <div className="content">
                <h6 className="card-title">Timely Delivery</h6>
                <p >• Fast Reliable Consistent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-card">
          <div className="custom-card">
            <div className=" d-flex align-items-center gap-1">
              <div className="icon-round">
                <i className="bi bi-gift"></i>

              </div>
              <div className="content">
                <h6 className="card-title">Budget Friendly Pricing</h6>
                <p >Affordable • Transparent • Fair</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-card">
          <div className="custom-card">
            <div className=" d-flex align-items-center gap-1">
              <div className="icon-round">
                <i className="bi bi-arrow-repeat"></i>

              </div>
              <div className="content">
                <h6 className="card-title">Wide Product Range</h6>
                <p >Diverse • Complete • Versatile</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-card">
          <div className="custom-card">
            <div className=" d-flex align-items-center gap-1">
              <div className="icon-round">
                <i className="bi bi-headset"></i>

              </div>
              <div className="content">
                <h6 className="card-title">Trusted Brand Partners</h6>
                <p >Recognized • Reliable • Proven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Features;

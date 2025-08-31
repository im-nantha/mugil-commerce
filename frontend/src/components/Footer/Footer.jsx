import React from "react";
import "./Footer.scss";


const Footer = () => {
  return (
    <footer>
      <div className="footer-head w-100 px-5 py-5">
        <div className="d-flex justify-content-between">
          <h2>MUGIL MART</h2>
          <div className="footer-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter-x"></i>
          </div>
        </div>
      </div>
      <div className="footer-body px-5 pb-4">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Business Contact</h5>
                <p className="card-text">123 Yarran st, Punchbowl, NSW 2196, Australia</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Subscribe Newsletter</h5>
                <p className="card-text">We invite you to register to read the latest news, offers and events about our company. We promise not spam your inbox.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 d-flex">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <ul className="footer-menu-list">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="store-location.html">Our Store</a>
                  </li>
                  <li>
                    <a href="about-us.html">Our Story</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resource</h5>
                <ul className="footer-menu-list">
                  <li>
                    <a href="privacy-policy.html">Privacy Policies</a>
                  </li>
                  <li>
                    <a href="term-and-condition.html">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="return-and-refund.html">Returns &amp; Refunds</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ’s</a>
                  </li>
                  <li>
                    <a href="shipping.html">Shipping</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom w-100 px-5 pb-5">
        <div className="d-flex">
          <p>Copyright © 2025 by Mugil Elite mart. All Rights Reserved.</p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;

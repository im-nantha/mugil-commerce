import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="mr-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="mr-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="border-bottom">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem mr-3"></i>Mugil Elite Mart
              </h6>
              <p className="text-left">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-left">
              <h6 className="text-uppercase fw-bold mb-4">Explore</h6>
              <p>
                <a href="#" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-left">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home mr-3"></i>Vasi Glass And Plywoods - Mugil Elite Mart, Kallakurichi, Tamil Nadu
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>
                murugan@mugilelitemart.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i>09894487698
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        © 2025 Copyright: <a href="https://mugilelitemart.com">mugilelitemart</a> All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

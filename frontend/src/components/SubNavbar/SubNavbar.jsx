import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/mugil-logo.jpg";
import "./SubNavbar.scss";

const SubNavbar = () => {
  return (
    <header className="header">
      <div className="mugil-mart-header">
        <div className="mugil-mart-browse">
          <a href="#" className="categories-title">
            <i className="icon icon-categories"></i>browse categories
          </a>
        </div>
        <nav className="mugil-mart-navbar">
          <ul className="mugil-mart-navbar-content">
            <li>
              <Link to="/mugil-commerce/" className="mugil-mart-nav-wrap">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mugil-commerce/" className="mugil-mart-nav-wrap">
                Home Decor
              </Link>
            </li>
            <li>
              <Link to="/mugil-commerce/about" className="mugil-mart-nav-wrap">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/mugil-commerce/products"
                className="mugil-mart-nav-wrap"
              >
                Our Products
              </Link>
            </li>
            <li>
              <Link
                to="/mugil-commerce/contact"
                className="mugil-mart-nav-wrap"
              >
                Contact
              </Link>
            </li>
          </ul>
          <button className="hamburger">
            <i className="menuIcon material-icons">menu</i>
            <i className="closeIcon material-icons">close</i>
          </button>
        </nav>
        <div className="mugil-mart-list-wrapper">
          <i className="bi bi-telephone-x"></i>
          <a href="tel:7010726530" className="tel-number">
            +917010726530
          </a>
        </div>
      </div>
    </header>
  );
};

export default SubNavbar;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/mugil-logo.jpg";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div className="header-wrapper py-2">
        <p className="text-center text-white">Welcome to Mugil elite mart</p>
      </div>
      <div className="mugil-mart-header">
        <div className="mugil-mart-logo">
          <Link to="/mugil-commerce/" className="mugil-mart-logo-wrapper">
            <img className="mugil-mart-img" src={logo} alt="mugil-mart-logo" />
          </Link>
        </div>
        <nav className="mugil-mart-navbar">
          <ul className="mugil-mart-navbar-content">
            <li>
              <Link to="/mugil-commerce/" className="mugil-mart-nav-wrap">
                Home
              </Link>
            </li>
            <li>
              <Link to="/mugil-commerce/about" className="mugil-mart-nav-wrap">
                About
              </Link>
            </li>
            <li>
              <Link to="/mugil-commerce/products" className="mugil-mart-nav-wrap">
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/mugil-commerce/contact" className="mugil-mart-nav-wrap">
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
          <div className="mugil-mart-items">
            <a href="mailto:murugan@mugilelitemart.com" className="cart-icon-wrapper search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>
            </a>
          </div>
          <div className="mugil-mart-items">
            <a href="https://maps.app.goo.gl/tqaaJE2Sig7zpwLk9" target="_blank" className="cart-icon-wrapper search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>
            </a>
          </div>
          <div className="mugil-mart-items">
            <Link id="cart" to={"/cart"} className="cart-icon-wrapper search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              <div className="ml-1" id="cart_count">
                {cartItems.length}
              </div>
            </Link>
          </div>
          <div className="mugil-mart-items">
            <a
              href="https://api.whatsapp.com/send?phone=9894487698&text=Hi%20Murugan"
              target="_blank"
              className="cart-icon-wrapper search-icon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

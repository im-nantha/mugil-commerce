import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import Home from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Cart from "./pages/CartPage";
import "./assets/styles/main.scss";
import About from "./pages/AboutPage";
import ContactUs from "./pages/ContactUsPage";
import Products from "./pages/productsPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Router>
        <div>
          <ToastContainer theme="dark" position="top-center" />
          <Header cartItems={cartItems} />     
          <SubNavbar/>     
          <Routes>
            <Route path="/mugil-commerce/" element={<Home />} />
            <Route path="/mugil-commerce/search" element={<Home />} />
            <Route
              path="/mugil-commerce/cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="/mugil-commerce/about" element={<About />} />
            <Route path="/mugil-commerce/contact" element={<ContactUs />} />
            <Route path="/mugil-commerce/products" element={<Products />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;

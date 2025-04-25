import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetail from "./pages/productDetail";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Cart from "./pages/Cart";
import "./assets/styles/main.scss";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Router>
        <div>
          <ToastContainer theme="dark" position="top-center" />
          <Header cartItems={cartItems} />          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Home />} />
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;

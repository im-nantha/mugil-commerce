import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const productDetail = ({ cartItems, setCartItems }) => {
  const [product, setproduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/product/" + id)
      .then((res) => res.json())
      .then((res) => setproduct(res.singleProduct))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToCart = () => {
    const itemExist = cartItems.find(item => item.product._id == product._id);

    if (!itemExist) {
      const newItem = { product, qty };
      setCartItems((state) => [...state, newItem]);
      toast.success("Cart item Added Successfully");
    }
  };

  const increaseQty = () => {
    if (product.stock == qty) {
      return;
    }
    setQty((count) => count + 1);
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty((count) => count - 1);
    }
  };

  return (
    product && (
      <div className="container container-fluid">
        <div className="row f-flex justify-content-around">
          <div className="col-12 col-lg-5 img-fluid" id="product_image">
            <img
              src={product.images[0].image}
              alt="sdf"
              height="500"
              width="500"
            />
          </div>
          <div className="col-12 col-lg-5 mt-5">
            <h3>{product.name}</h3>
            <p id="product_id">{product._id}</p>
            <hr />
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <hr />
            <p id="product_price">{product.price}</p>
            <div className="stockCounter d-inline">
              <span className="btn btn-danger minus" onClick={decreaseQty}>
                -
              </span>
              <input
                type="number"
                className="form-control count d-inline"
                value={qty}
                readOnly
              />
              <span className="btn btn-primary plus" onClick={increaseQty}>
                +
              </span>
            </div>
            <button
              type="button"
              id="cart_btn"
              className="btn btn-primary d-inline ml-4"
              onClick={addToCart}
              disabled={product.stock == 0}
            >
              Add to Cart
            </button>
            <hr />
            <p>
              Status:
              <span
                id="stock_status"
                className={product.stock > 0 ? "text-success" : "text-danger"}
              >
                {product.stock > 0 ? "In stock" : "out of stock"}
              </span>
            </p>
            <hr />
            <h4 className="mt-2">Description:</h4>
            <p>{product.description}</p>
            <hr />
            <p id="product_seller mb-3">
              Sold by: <strong>{product.seller}</strong>
            </p>
            <div className="rating w-50"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default productDetail;

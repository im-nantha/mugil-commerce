import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <Link to={"/product/"+product._id} className="anchor">
      <div className="card p-3 rounded">
        <img className="card-img-top mx-auto" src={product.images[0].image} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
          <p>{product.name}</p>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div className="rating-inner" style={{width : `${product.ratings/5*100}%`}}></div>
            </div>
          </div>
          <p className="card-text">{product.price}</p>
          <p id="view_btn" className="btn btn-block">
            View Details
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductCard;

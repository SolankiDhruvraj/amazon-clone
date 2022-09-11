import React from "react";
import "./Product.css";
import "./Home.js";
function Product(props) {
  return (
    <div className="product">
      <div className="product-info">
        <p>{props.title}</p>
        <p className="product-price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product-rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.url} alt="" srcSet="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;

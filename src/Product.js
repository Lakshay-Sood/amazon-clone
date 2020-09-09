import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">⭐⭐⭐</div>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          alt=""
          className="product__image"
        />
      </div>
    </div>
  );
}

export default Product;

import React from 'react';
import './Product.scss';

function Product({ id, title, price, image, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="rating">
                ⭐
              </span>
            ))}
          {console.log(rating)}
        </div>

        <img src={image} alt="" className="product__image" />

        <button className="product__buyButton">Add to basket</button>
      </div>
    </div>
  );
}

export default Product;

import React from 'react';
import './Product.scss';
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        price,
        image,
        rating,
      },
    });
  };

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
        </div>

        <img src={image} alt="" className="product__image" />

        <button className="product__buyButton" onClick={addToBasket}>
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default Product;

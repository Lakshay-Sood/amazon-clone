import React from 'react';
import './CheckoutProduct.scss';
import { useStateValue } from './StateProvider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function CheckoutProduct({ item }) {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: item,
    });
  };

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={item.image} alt={item.title + ' img'} className="checkoutProduct__image" />
      <div className="checkoutProduct__details">
        <h3>{item.title}</h3>
        <p>
          <small>$</small>
          <strong>{item.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(item.rating)
            .fill()
            .map((_, index) => (
              <span role="img" aria-label="rating" key={index.toString()}>
                ⭐
              </span>
            ))}
        </div>
        <div className="checkoutProduct__quantity">
          <p>Quantity: </p>
          <button className="checkoutProduct__addRemoveButton" onClick={addToBasket}>
            <AddIcon />
          </button>
          <p>
            <strong>{item.quantity}</strong>
          </p>
          <button className="checkoutProduct__addRemoveButton" onClick={removeFromBasket}>
            <RemoveIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;

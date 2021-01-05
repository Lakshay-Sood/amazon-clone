import React from 'react';
import { useHistory } from 'react-router-dom';
// import React, { useState } from 'react';
import './Checkout.scss';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ basket }] = useStateValue();
  // const [isGift, setIsGift] = useState(false);
  const history = useHistory();

  const itemsInBasket = basket.reduce((acc, item) => acc + item.quantity, 0);
  const subtotalAmount = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <div className="checkout__adAndItems">
        {/* 1) Ad banner */}
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flgbtnetwork.org%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fhome_banner%2Fpublic%2Famazon-smile-slider_0.jpg%3Fitok%3DnA2Hy7Y0&f=1&nofb=1"
          alt="ad"
          className="checkout__ad"
        />

        <div className="checkout__items">
          {/* checking if cart is empty */}
          {itemsInBasket <= 0 ? (
            <div>
              <h2>Your cart is empty!</h2>
              <p>
                To add one or more items to your cart, click on 'Add to basket' button next to the
                items
              </p>
            </div>
          ) : (
            <h2>
              Your cart has {basket.length} {basket.length > 1 ? 'products' : 'product'}
            </h2>
          )}

          {/* 2) L: list items in card w/ details */}
          {basket.map((item) => (
            <CheckoutProduct key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* 3) total items, total amount, proceed to pay */}
      {itemsInBasket > 0 && (
        <div className="checkout__total">
          <h3>
            Subtotal ({itemsInBasket} {itemsInBasket > 1 ? 'items' : 'item'}): $
            {subtotalAmount.toFixed(2)}
          </h3>
          <label>
            <input type="checkbox" name="gift" />
            {/* <input type="checkbox" name="gift" {isGift == true ? 'checked' : ''}/> */}
            <small>This order contains a gift</small>
          </label>
          <br />
          <button type="submit" onClick={(e) => history.push('/payment')}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;

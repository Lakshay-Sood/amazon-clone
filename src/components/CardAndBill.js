import React, { useState } from 'react';
import './CardAndBill.scss';
import { useStateValue } from './StateProvider';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { db } from './../firebase';

function CardAndBill() {
  const [{ basket, user }, dispatch] = useStateValue();
  const subtotalAmount = Number(
    basket.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
  );
  const taxAmount = Number((subtotalAmount * 0.05).toFixed(2));
  const totalAmount = Number((subtotalAmount + 2 * taxAmount).toFixed(2));
  const history = useHistory();

  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');

  const handleCardNumber = (e) => {
    // Validator and Formater
    if (e.target.value.length > 12 || (!Number(e.target.value) && e.target.value !== '')) return;
    setCardNumber(e.target.value);
  };

  const handleCardExpiry = (e) => {
    let date = e.target.value;

    // Validator and Formater
    // printing a '/' after 2 character acc to MM / YY format
    if (date.length === 2 && cardExpiry.length === 1 && Number(date[1])) date = date + '/';
    else if (date.length === 3 && cardExpiry.length === 2) {
      if (Number(date[2])) date = cardExpiry + '/' + date[2];
      else return;
    } else if (date.length > 0 && !Number(date[date.length - 1]) && date.length !== 3) return;
    else if (date.length > 5) return;

    setCardExpiry(date);
  };

  const handleCardCVV = (e) => {
    // Validator and Formater
    if (e.target.value.length > 3 || (!Number(e.target.value) && e.target.value !== '')) return;

    setCardCVV(e.target.value);
  };

  const handlePurchase = (e) => {
    // - TODO: PAYMENT FUNCTIONALITY (LATER, requires cloud functions to makae calls to stripe api => requires Blaze plan of firebase => requires credit card info

    // User needs to be signed in to make the purchase
    if (!user) {
      if (window.confirm('You need to be signed in to make the purchase. \nGo to Sign In page?')) {
        history.push('/login');
      }
      return;
    }

    // - Saving basket details to the cloud firestore
    const orderId = 'order_' + (Math.random() * 100000).toFixed(0); //to get a 5 digit order id
    db.collection('users').doc(user?.uid).collection('orders').doc(orderId).set({
      basket: basket,
      amount: totalAmount,
      boughtAt: Date.now(),
    });

    dispatch({ type: 'CLEAR_BASKET' });
    history.replace('/orders');
  };

  return (
    <div>
      <div className="payment__card">
        <div className="card__title">
          <CreditCardIcon />
          <strong> Card Details</strong>
        </div>
        <div>
          <TextField
            id="card__number"
            className="card__input"
            label="Card Number"
            variant="outlined"
            size="small"
            value={cardNumber}
            onChange={handleCardNumber}
          />
          <div className="expiry_cvv__wrapper">
            <TextField
              id="card__expiry"
              className="card__input"
              label="Expiry"
              variant="outlined"
              size="small"
              placeholder="MM / YY"
              value={cardExpiry}
              onChange={handleCardExpiry}
            />
            <TextField
              id="card__cvv"
              className="card__input"
              label="CVV"
              variant="outlined"
              size="small"
              value={cardCVV}
              onChange={handleCardCVV}
            />
          </div>
        </div>
      </div>
      <div className="total-bill">
        <p className="bill__part bill__subtotal">
          <span>Subtotal :</span>
          <span>$ {subtotalAmount}</span>
        </p>
        <p className="bill__part">
          <span>CGST @5% : </span>
          <span>$ {taxAmount}</span>
        </p>
        <p className="bill__part">
          <span>SGST @5% : </span>
          <span>$ {taxAmount}</span>
        </p>
        <hr />
        <p className="bill__part bill__total">
          <span>Total : </span>
          <span>$ {totalAmount}</span>
        </p>
        <button className="buy-now-btn" onClick={handlePurchase}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default CardAndBill;

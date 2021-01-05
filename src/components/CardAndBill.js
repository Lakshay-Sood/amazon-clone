import React, { useState } from 'react';
import './CardAndBill.scss';
import { useStateValue } from './StateProvider';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TextField from '@material-ui/core/TextField';

function CardAndBill() {
  const [{ basket }] = useStateValue();
  const subtotalAmount = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxAmount = subtotalAmount * 0.05;
  const totalAmount = subtotalAmount + 2 * taxAmount;

  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');

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
          />
          <div className="expiry_cvv__wrapper">
            <TextField
              id="card__expiry"
              className="card__input"
              label="Expiry"
              variant="outlined"
              size="small"
              placeholder="MM / YY"
            />
            <TextField
              id="card__cvv"
              className="card__input"
              label="CVV"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
      </div>
      <div className="total-bill">
        <p className="bill__part bill__subtotal">
          <span>Subtotal :</span>
          <span>$ {subtotalAmount.toFixed(2)}</span>
        </p>
        <p className="bill__part">
          <span>CGST @5% : </span>
          <span>$ {taxAmount.toFixed(2)}</span>
        </p>
        <p className="bill__part">
          <span>SGST @5% : </span>
          <span>$ {taxAmount.toFixed(2)}</span>
        </p>
        <hr />
        <p className="bill__part bill__total">
          <span>Total : </span>
          <span>$ {totalAmount.toFixed(2)}</span>
        </p>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default CardAndBill;

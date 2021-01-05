import React, { useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.scss';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TextField from '@material-ui/core/TextField';

function Payment() {
  const [{ basket, user }] = useStateValue();
  const itemsInBasket = basket.reduce((acc, item) => acc + item.quantity, 0);
  const subtotalAmount = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxAmount = subtotalAmount * 0.05;
  const totalAmount = subtotalAmount + 2 * taxAmount;

  return (
    <div className="payment">
      <h2 className="title">Billing and Payment</h2>

      {/* Section 1: Address */}
      <div className="payment__section">
        <div className="section__title">Delivery Address</div>
        <div className="section__content">
          <p>A-201, Gokuldham Apartments</p>
          <p>Rohini, New Delhi - 110065</p>
          <p>
            <i>{user?.email || 'Guest User'}</i>
          </p>
        </div>
      </div>

      {/* Section 2: Items */}
      <div className="payment__section">
        <div className="section__title">Review Items</div>
        <div className="section__content">
          {itemsInBasket <= 0 ? (
            <div>
              <p>No items in your Basket!</p>
              <Link to="/">
                <p>Find Products...</p>
              </Link>
            </div>
          ) : (
            ''
          )}
          {basket.map((item) => (
            <div className="margin_cutter">
              <CheckoutProduct key={item.id} item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Card details */}
      <div className="payment__section">
        <div className="section__title">Payment Method</div>
        <div className="section__content">
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
      </div>
    </div>
  );
}

export default Payment;

import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.scss';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import CardAndBill from './CardAndBill';

function Payment() {
  const [{ basket, user }] = useStateValue();
  const itemsInBasket = basket.reduce((acc, item) => acc + item.quantity, 0);

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
          <CardAndBill />
        </div>
      </div>
    </div>
  );
}

export default Payment;

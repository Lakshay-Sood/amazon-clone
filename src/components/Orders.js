import React, { useEffect, useState } from 'react';
import './Orders.scss';
import { db } from './../firebase';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import moment from 'moment';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('boughtAt', 'desc')
      .onSnapshot((snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => {
            const data = doc?.data();
            return (
              <div className="order__container">
                <div className="dateAndId">
                  <h3>{moment(data.boughtAt).calendar()}</h3>
                  <small> Order id: {doc.id}</small>
                </div>
                <strong>${data.amount}</strong>
                {data.basket.map((item) => (
                  <CheckoutProduct key={doc.id + item.id} item={item} hideQuantityChange />
                ))}

                {/* <p>{data.}</p> */}
              </div>
            );
          })
        );
      });

    console.log(orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className="orders__page">
      <h2 className="title">Your Orders</h2>
      <div>{orders}</div>
    </div>
  );
}

export default Orders;

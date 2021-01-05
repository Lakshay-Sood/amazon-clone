import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import SignIn from './components/SignIn';
import Payment from './components/Payment';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';

//amazon banner
// https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg?fbclid=IwAR2y_wXONOjTpC5dhw57fYaOvHRZr11IGUVAXrBjn-SDhxGjPUqOtCF8DQ0

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    // will run only once when the App component loads, cuz second parameter to hook is []

    // this is an event listener of firebase.auth
    auth.onAuthStateChanged((authUser) => {
      // console.log('AuthStateChanged \nUser is => ', authUser);
      if (authUser) {
        // user just signed in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

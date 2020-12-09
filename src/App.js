import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

//amazon banner
// https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg?fbclid=IwAR2y_wXONOjTpC5dhw57fYaOvHRZr11IGUVAXrBjn-SDhxGjPUqOtCF8DQ0

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout route</h1>
          </Route>
          <Route path="/login">
            <h1>Login route</h1>
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header />
            <h1>Default route</h1>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

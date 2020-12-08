import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';

//amazon banner
// https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg?fbclid=IwAR2y_wXONOjTpC5dhw57fYaOvHRZr11IGUVAXrBjn-SDhxGjPUqOtCF8DQ0

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

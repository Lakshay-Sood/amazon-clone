import React from 'react';
import './Home.scss';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            key="123"
            id="123"
            title="Learning Javascript w/ Lakshay 1"
            price={7.99}
            rating={4}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
          <Product
            key="234"
            id="234"
            title="Learning Javascript w/ Lakshay 2"
            price={7.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
        </div>
        <div className="home__row">
          <Product
            key="345"
            id="345"
            title="Learning Javascript w/ Lakshay 3"
            price={7.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
          <Product
            key="456"
            id="456"
            title="Learning Javascript w/ Lakshay 4"
            price={7.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
          <Product
            key="567"
            id="567"
            title="Learning Javascript w/ Lakshay 5"
            price={7.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
          <Product
            key="678"
            id="678"
            title="Learning Javascript w/ Lakshay 6"
            price={7.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
        </div>
        <div className="home__row">
          <Product
            key="789"
            id="789"
            title="Learning Javascript w/ Lakshay 7"
            price={7.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
          <Product
            key="890"
            id="890"
            title="Learning Javascript w/ Lakshay 8"
            price={7.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
          <Product
            key="901"
            id="901"
            title="Learning Javascript w/ Lakshay 9"
            price={7.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
        </div>
        <div className="home__row">
          <Product
            key="12324"
            id="123"
            title="Learning Javascript w/ Lakshay 1"
            price={7.99}
            rating={3}
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

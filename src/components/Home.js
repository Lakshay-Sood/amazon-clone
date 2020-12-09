import React from 'react';
import './Home.scss';
import Product from './Product';

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />

          <div className="home__row">
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={4}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={3}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
          </div>
          <div className="home__row">
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={3}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={3}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={3}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={3}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
          </div>
          <div className="home__row">
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={3}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={3}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={3}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
          </div>
          <div className="home__row">
            <Product
              id="1224433"
              title="The Lean Startup"
              price={19.9}
              rating={3}
              image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.javatechblog.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBest-books-for-JavaScript-Learning-JavaScript.jpg&f=1&nofb=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

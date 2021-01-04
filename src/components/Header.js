import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

function Header() {
  // const [state, dispatch] = useStateValue();
  // but we only need state.basket
  const [{ basket, user }] = useStateValue();
  const itemsInBasket = basket.reduce((acc, item) => acc + item.quantity, 0);
  // console.log('Basket: ', basket);

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
    // if user is not signed in, <Link> takes it to /login
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" id="laks"></SearchIcon>
      </div>

      <div className="header__nav">
        {/* go to /login only if user is not signed in */}
        <Link to={!user && '/login'} className="header__link">
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLineOne">
              Hello {user ? user.email.split('@')[0] : 'Guest'}
            </span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Try</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">{itemsInBasket}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

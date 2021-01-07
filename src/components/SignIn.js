import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
// import { useStateValue } from './StateProvider';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  // const [, dispatch] = useStateValue();

  const userSignIn = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    // firebase login code
    try {
      const auth_data = await auth.signInWithEmailAndPassword(email, password);
      console.log(auth_data);
      history.push('/');
    } catch (err) {
      alert(err.message);
    }
  };

  const userRegister = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    // firebase register code
    try {
      const auth_data = await auth.createUserWithEmailAndPassword(email, password);
      console.log(auth_data);
      history.push('/');
    } catch (err) {
      alert(err.message);
    }
  };

  // <<< OLD CODE WITH DISPATCH CALLS >>> //
  // <<< now we dont need them in the uncommented code below cuz we added an event listener on authStateChange that makes the dispatch calls >>> //

  // const userSignIn = async (e) => {
  //   e.preventDefault();
  //   console.log({ email, password });

  //   // firebase login code
  //   try {
  //     const auth_data = await auth.signInWithEmailAndPassword(email, password);
  //     console.log(auth_data);

  //     dispatch({
  //       type: 'SIGN_IN_USER',
  //       user: auth_data.user,
  //     });

  //     history.push('/');
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  // const userRegister = async (e) => {
  //   e.preventDefault();
  //   console.log({ email, password });

  //   // firebase register code
  //   try {
  //     const auth_data = await auth.createUserWithEmailAndPassword(email, password);
  //     // console.log(auth_data);

  //     dispatch({
  //       type: 'REGISTER_USER',
  //       user: auth_data.user,
  //     });

  //     history.push('/');
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };

  return (
    <div className="signIn">
      <Link to="/">
        <img
          className="header__logo"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pfaf.org%2FUserFilesCms%2Famazon-logo.png&f=1&nofb=1"
          alt="amazon logo"
        />
      </Link>
      <label htmlFor="email-input">Email Id</label>
      <input
        type="email"
        name="email"
        id="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password-input">Password</label>
      <input
        type="password"
        name="password"
        id="password-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={userSignIn}>
        Submit and Sign In
      </button>
      <button type="submit" onClick={userRegister}>
        Register as new user
      </button>
    </div>
  );
}

export default SignIn;

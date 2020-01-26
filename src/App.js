import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignIngAndSignUp from './pages/signIn-signUp-page/sign-in-sign-up.component';

import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log('USER', user);
    });
  }, []);

  useEffect(() => {
    return () => {
      console.log('Exit APP');
      unsubscribeFromAuth();
    };
  }, [unsubscribeFromAuth]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignIngAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;

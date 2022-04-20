// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import AuctionShowPage from './components/AuctionShowPage';
import AuctionIndexPage from './components/AuctionIndexPage';
import { User } from './requests';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewAuctionPage from './components/NewAuctionPage';
import SignInPage from './components/SignInPage';
import AuthRoute from './components/AuthRoute';
import SignUpPage from './components/SignUpPage';
import UseStateHook from './components/UseStateHook';
import UseEffectHook from './components/UseEffectHook';
import NotFoundPage from './components/NotFoundPage';
import WelcomePage from './components/WelcomePage';

export default function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    getCurrentUser();
  }, [])

  const getCurrentUser = () => {
    return User.current().then(user => {
      console.log(user)
      //This is the safe navigation operator
      //similar to user && user.id (user&.id)
      if (user?.id) {
        setUser(user)
      }
    })
  }

  const onSignOut = () => { setUser(null) }

  return (
    <BrowserRouter>
      <NavBar currentUser={user} onSignOut={onSignOut} />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path='/sign_in'
          render={(routeProps) => <SignInPage {...routeProps} onSignIn={getCurrentUser} />}
        />
        <Route exact path='/sign_up'
          render={(routeProps) => <SignUpPage {...routeProps} onSignUp={getCurrentUser} />} />
        <Route exact path='/auctions' component={AuctionIndexPage} />
        <AuthRoute isAuthenticated={!!user} exact path='/auctions/new' component={NewAuctionPage}></AuthRoute>
        <Route exact path='/auctions/:id' component={AuctionShowPage} />
        <Route path='/use_state' component={UseStateHook} />
        <Route path='/use_effect' component={UseEffectHook} />
        <Route component={NotFoundPage} />
        
      </Switch>
    </BrowserRouter>
  )
}
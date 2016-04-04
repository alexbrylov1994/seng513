import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import { LoginPage, RegisterPage, ResetPasswordPage, VerifyEmailPage, ProfilePage } from './components/authentication';
import { MasterPage, IndexPage, aboutPage, myBookmarks,myGarage } from './components/initialPages';
require('./css/style.scss');

ReactStormpath.init();

ReactDOM.render(
  <Router history={createBrowserHistory()}>
      <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/verify' component={VerifyEmailPage} />
      <Route path='/register' component={RegisterPage} />
      <Route path='/forgot' component={ResetPasswordPage} />
      <Route path='/about' component={aboutPage} />

      <Route path='/bookmarks' component={myBookmarks} />
      <Route path='/garage' component={myGarage} />

      <AuthenticatedRoute>
        <HomeRoute path='/profile' component={ProfilePage} />

      </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);

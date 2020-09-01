import React from 'react';
import { Switch, BrowserRouter,Route } from 'react-router-dom';
import PrivateRoute from './component/privateroute.js'
import Articles from './component/articles.js'
import './App.css';
import Login from './component/login.js'
// import { Route, Router } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path = "/login" component={Login} />
          <PrivateRoute path = '/articles' component={Articles} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

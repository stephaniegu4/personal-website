import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import NavBar from './navbar.js';
import Home from './home.js';

ReactDOM.render(
  <Router>
    <NavBar/>
    <Switch>
      <Route to="/" component={Home} exact/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();

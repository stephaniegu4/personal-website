import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import NavBar from './navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <NavBar/>
    <Switch>

    </Switch>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();

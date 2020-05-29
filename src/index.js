import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import NavBar from './navbar.js';
import Home from './home.js';

function debounce(value, delay) {
  let timer

  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      value.apply(this, arguments)
    }, delay)
  }
}
 
function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    // cleanup so handleResize is not binded multiple times 
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();

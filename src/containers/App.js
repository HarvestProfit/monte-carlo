import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import store from '../store';

import MonteCarlo from './MonteCarlo';

import whiteLogo from '../utilities/assets/logo-white-100.png';

const App = () => (
  <Provider store={store}>
    <div>
      <header className="navbar navbar-light bg-dark">
        <a className="navbar-brand" href="https://www.harvestprofit.com">
          <img className="img-fluid" alt="Harvest Profit" src={whiteLogo} height="30" width="30" />
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active text-light">
            Monte Carlo Simulator
          </li>
        </ul>
      </header>
      <div className="container">
        <Router>
          <Route exact path="/" component={MonteCarlo} />
        </Router>
      </div>
      <footer className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <ul className="navbar-nav">
          <li className="nav-item">
            Made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://www.harvestprofit.com">Harvest Profit</a>
          </li>
        </ul>
        <a href="https://github.com/HarvestProfit/monte-carlo" className="nav-link">
          Source Code
        </a>
      </footer>
    </div>
  </Provider>
);

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import store from '../store';

import MonteCarlo from './MonteCarlo';
import Iterations from './Iterations';

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
        <div className="jumbotron">
          <h1>Monte Carlo Simulator</h1>
          <p className="lead">
            This is a simple Monte Carlo simulator. Please read these instructions before use.
          </p>
        </div>
        <Router>
          <div>
            <Route exact path="/" component={MonteCarlo} />
            <Route path="/iterations" component={Iterations} />
          </div>
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

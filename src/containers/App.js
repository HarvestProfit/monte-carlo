import React from 'react';
import { Provider } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import store from '../store';

import MonteCarlo from './MonteCarlo';

const App = () => (
  <Provider store={store}>
    <div>
      <header className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-light" href="https://www.harvestprofit.com">
          Harvest Profit
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active text-light">
            Monte Carlo Simulator
          </li>
        </ul>
      </header>
      <div className="container">
        <MonteCarlo />
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

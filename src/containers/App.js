import React from 'react';
import { Provider } from 'react-redux';
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
    </div>
  </Provider>
);

export default App;

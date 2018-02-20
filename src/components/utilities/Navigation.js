import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ current }) => {
  const active = 'nav-link active';
  const inactive = 'nav-link';
  return (
    <ul className="nav nav-fill nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
        <Link
          className={current === '/' ? active : inactive}
          to="/"
          href="/"
        >
          Parameters
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={current === '/iterations' ? active : inactive}
          to="/iterations"
          href="/iterations"
        >
          Iterations
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className={current === '/analysis' ? active : inactive}
          to="/analysis"
          href="/analysis"
        >
          Analysis
        </Link>
      </li>
    </ul>
  );
};

Navigation.propTypes = {
  current: PropTypes.string.isRequired,
};

export default Navigation;

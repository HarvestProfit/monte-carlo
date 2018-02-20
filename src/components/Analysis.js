import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './utilities/Navigation';

const Analysis = () => (
  <div>
    <Navigation current="/analysis" />
    <div className="col-12 text-center py-5 my-5">
      <p className="lead">
        The analysis page has yet to be implemented.
      </p>
      <p>Return back to the <Link to="/" href="/">Parameters Page</Link></p>
    </div>
  </div>
);

export default Analysis;

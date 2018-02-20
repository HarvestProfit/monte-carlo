import React from 'react';
import { Link } from 'react-router-dom';

const NoIterations = () => (
  <div className="col-12 text-center py-5 my-5">
    <p className="lead">
      You have yet to run your Monte Carlo simulation.
    </p>
    <p>Return back to the <Link to="/" href="/">Parameters Page</Link></p>
  </div>
);

export default NoIterations;

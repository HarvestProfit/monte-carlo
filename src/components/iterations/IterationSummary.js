import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const IterationSummary = ({ index, iteration }) => (
  <div className="card-group mb-5">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Iteration</h5>
        <p className="card-text">#{index}</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Maximum Value</h5>
        <p className="card-text">${_.max(iteration).toFixed(3)}</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Minimum Value</h5>
        <p className="card-text">${_.min(iteration).toFixed(3)}</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Average Value</h5>
        <p className="card-text">${(_.sum(iteration) / iteration.length).toFixed(3)}</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Last Value</h5>
        <p className="card-text">${iteration[iteration.length - 1].toFixed(3)}</p>
      </div>
    </div>
  </div>
);

IterationSummary.propTypes = {
  index: PropTypes.number.isRequired,
  iteration: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default IterationSummary;

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const ResultsTable = (props) => {
  const row = (array, index) => (
    <tr key={index} onClick={() => props.setIteration(index)}>
      <th scope="row">{index + 1}</th>
      <td>${_.max(array).toFixed(3)}</td>
      <td>${_.min(array).toFixed(3)}</td>
      <td>${array[array.length - 1].toFixed(3)}</td>
    </tr>
  );
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Iteration</th>
            <th>Greatest Value</th>
            <th>Lowest Value</th>
            <th>Last Value</th>
          </tr>
        </thead>
        <tbody>
          {props.iterations.map((iteration, index) => row(iteration, index))}
        </tbody>
      </table>
    </div>
  );
};

ResultsTable.propTypes = {
  iterations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  setIteration: PropTypes.func.isRequired,
};

export default ResultsTable;

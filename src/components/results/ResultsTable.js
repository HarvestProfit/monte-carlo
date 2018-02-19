import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const ResultsTable = (props) => {
  const row = (array, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>${_.max(array).toFixed(3)}</td>
      <td>${_.min(array).toFixed(3)}</td>
      <td>${(_.sum(array) / array.length).toFixed(3)}</td>
      <td>${array[array.length - 1].toFixed(3)}</td>
    </tr>
  );
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Iteration</th>
          <th>Greatest Value</th>
          <th>Lowest Value</th>
          <th>Avg. Value</th>
          <th>Last Value</th>
        </tr>
      </thead>
      <tbody>
        {props.iterations.map((iteration, index) => row(iteration, index))}
      </tbody>
    </table>
  );
};

ResultsTable.propTypes = {
  iterations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

export default ResultsTable;

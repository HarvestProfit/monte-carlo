import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

const IterationInput = (props) => {
  const {
    iterations,
  } = props;
  const iterationsIsValid = _.isFinite(_.toNumber(iterations));
  return (
    <div className="col-12 mt-3">
      <div className="form-group">
        <label htmlFor="iterations">
          Iterations{!iterationsIsValid && ' must be a number'}
          <input
            className={iterationsIsValid ? 'form-control' : 'form-control is-invalid'}
            id="iterations"
            onChange={event => props.handleIterationChange(event.target.value)}
            type="text"
            value={iterations}
          />
        </label>
      </div>
    </div>
  );
};

IterationInput.propTypes = {
  iterations: PropTypes.string.isRequired,
  handleIterationChange: PropTypes.func.isRequired,
};

export default IterationInput;

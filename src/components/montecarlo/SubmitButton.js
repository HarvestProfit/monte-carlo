import PropTypes from 'prop-types';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner';

const SubmitButton = (props) => {
  const {
    iterationLength,
    progress,
    running,
  } = props;
  return (
    <div className="col-12 mt-5">
      <button className="btn btn-primary btn-block" onClick={() => props.handleStartCalculations()}>
        {!running ? (
          'Calculate'
        ) : (
          <span>
            <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faSpinner} spin />
            {`${progress} out of ${iterationLength} processed.`}
          </span>
        )}
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  handleStartCalculations: PropTypes.func.isRequired,
  iterationLength: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  running: PropTypes.bool.isRequired,
};

export default SubmitButton;

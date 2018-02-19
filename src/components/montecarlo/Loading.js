import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class Loading extends PureComponent {
  static propTypes = {
    iterations: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
  }

  render() {
    const progress = (this.props.progress / this.props.iterations) * 100;
    return (
      <div className="progress mt-5">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow={progress.toFixed(2)}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress.toFixed(2)}%` }}
        >
          {this.props.progress} out of {this.props.iterations}
        </div>
      </div>
    );
  }
}

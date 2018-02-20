import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class Loading extends PureComponent {
  static propTypes = {
    iterations: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.iterations !== this.props.iterations) {
      this.setState({ progress: 0 });
    } else {
      this.setState({ progress: (nextProps.progress / nextProps.iterations) * 100 });
    }
  }

  render() {
    const { progress } = this.state;
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
          {progress > 0 && (
            <span>{this.props.progress} out of {this.props.iterations}</span>
          )}
        </div>
      </div>
    );
  }
}

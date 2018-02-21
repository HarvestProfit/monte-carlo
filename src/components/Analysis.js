import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './utilities/Navigation';

export default class Analysis extends Component {
  static propTypes = {
    analysis: PropTypes.shape({
      loading: PropTypes.bool,
      average: PropTypes.shape({
        average: PropTypes.number,
        standardDeviation: PropTypes.number,
      }),
      maximum: PropTypes.shape({
        average: PropTypes.number,
        standardDeviation: PropTypes.number,
      }),
      minimum: PropTypes.shape({
        average: PropTypes.number,
        standardDeviation: PropTypes.number,
      }),
      last: PropTypes.shape({
        average: PropTypes.number,
        standardDeviation: PropTypes.number,
      }),
    }).isRequired,
    startAnalysis: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.startAnalysis();
  }

  render() {
    const { analysis } = this.props;
    if (analysis.loading) {
      return (
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
    }
    return (
      <div>
        <Navigation current="/analysis" />
        <div className="col-12 text-center py-5 my-5">
          <p className="lead">
            The analysis page has yet to be implemented.
            But I can tell you the average of the average is:
          </p>
          <p>
            {this.props.analysis.average && this.props.analysis.average.average ? this.props.analysis.average.average.toString() : 'Calculating'}
          </p>
          <p className="lead">
            and the standard deviation of the average is:
          </p>
          <p>
            {this.props.analysis.average && this.props.analysis.average.standardDeviation ? this.props.analysis.average.standardDeviation.toString() : 'Calculating'}
          </p>
          <p className="lead">
            The average of the maximum is:
          </p>
          <p>
            {this.props.analysis.maximum && this.props.analysis.maximum.average ? this.props.analysis.maximum.average.toString() : 'Calculating'}
          </p>
          <p className="lead">
            and the standard deviation of the maximum is:
          </p>
          <p>
            {this.props.analysis.maximum && this.props.analysis.maximum.standardDeviation ? this.props.analysis.maximum.standardDeviation.toString() : 'Calculating'}
          </p>
          <p className="lead">
            The average of the minimum is:
          </p>
          <p>
            {this.props.analysis.minimum && this.props.analysis.minimum.average ? this.props.analysis.minimum.average.toString() : 'Calculating'}
          </p>
          <p className="lead">
            and the standard deviation of the minimum is:
          </p>
          <p>
            {this.props.analysis.minimum && this.props.analysis.minimum.standardDeviation ? this.props.analysis.minimum.standardDeviation.toString() : 'Calculating'}
          </p>
          <p className="lead">
            The average of the last price is:
          </p>
          <p>
            {this.props.analysis.last && this.props.analysis.last.average ? this.props.analysis.last.average.toString() : 'Calculating'}
          </p>
          <p className="lead">
            and the standard deviation of the last price is:
          </p>
          <p>
            {this.props.analysis.last && this.props.analysis.last.standardDeviation ? this.props.analysis.last.standardDeviation.toString() : 'Calculating'}
          </p>
          <p>Return back to the <Link to="/" href="/">Parameters Page</Link></p>
        </div>
      </div>
    );
  }
}

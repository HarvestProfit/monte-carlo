import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './utilities/Navigation';

export default class Analysis extends Component {
  static propTypes = {
    analysis: PropTypes.shape({
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
    return (
      <div>
        <Navigation current="/analysis" />
        <div className="col-12 text-center py-5 my-5">
          <p className="lead">
            The analysis page has yet to be implemented. But I can tell you the average of the average is:
          </p>
          <p>
            {this.props.analysis.average && this.props.analysis.average.average ? this.props.analysis.average.average.toString() : 'Calculating'}
          </p>
          <p>Return back to the <Link to="/" href="/">Parameters Page</Link></p>
        </div>
      </div>
    );
  }
}

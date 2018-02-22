import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './utilities/Navigation';
import StandardDistributionGraph from './analysis/StandardDistributionGraph';

import { getPlotedGraph } from '../utilities/standardNormalDistribution';

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
    if (_.isEmpty(this.props.analysis) || !this.props.analysis.loading) {
      this.startAnalysis();
    }
  }

  startAnalysis() {
    this.props.startAnalysis();
  }

  render() {
    const { analysis } = this.props;
    // If loading
    if (analysis.loading) {
      return (
        <div>
          <Navigation current="/analysis" />
          <div className="col-12 text-center py-5 my-5">
            <p className="lead">
              Loading...
            </p>
            <p>Return back to the <Link to="/" href="/">Parameters Page</Link></p>
          </div>
        </div>
      );
    }

    // Not loading, but empty
    if (!this.props.analysis.average.average) {
      return (
        <div>
          <Navigation current="/analysis" />
          <div className="col-12 text-center py-5 my-5">
            <p className="lead">
              There&apos;s nothing to analyze yet!
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
          <StandardDistributionGraph
            title="Average"
            graphData={getPlotedGraph(
              this.props.analysis.average.average,
              this.props.analysis.average.standardDeviation,
            )}
          />
          <p className="lead">
            The average of the average is:
          </p>
          <p>
            ${this.props.analysis.average.average.toString()}
          </p>
          <p className="lead">
            and the standard deviation of the average is:
          </p>
          <p>
            ${this.props.analysis.average.standardDeviation.toString()}
          </p>
          <StandardDistributionGraph
            title="Maximum"
            graphData={getPlotedGraph(
              this.props.analysis.maximum.average,
              this.props.analysis.maximum.standardDeviation,
            )}
          />
          <p className="lead">
            The average of the maximum is:
          </p>
          <p>
            ${this.props.analysis.maximum.average.toString()}
          </p>
          <p className="lead">
            and the standard deviation of the maximum is:
          </p>
          <p>
            ${this.props.analysis.maximum.standardDeviation.toString()}
          </p>
          <StandardDistributionGraph
            title="Minimum"
            graphData={getPlotedGraph(
              this.props.analysis.minimum.average,
              this.props.analysis.minimum.standardDeviation,
            )}
          />
          <p className="lead">
            The average of the minimum is:
          </p>
          <p>
            ${this.props.analysis.minimum.average.toString()}
          </p>
          <p className="lead">
            and the standard deviation of the minimum is:
          </p>
          <p>
            ${this.props.analysis.minimum.standardDeviation.toString()}
          </p>
          <StandardDistributionGraph
            title="Last"
            graphData={getPlotedGraph(
              this.props.analysis.last.average,
              this.props.analysis.last.standardDeviation,
            )}
          />
          <p className="lead">
            The average of the last price is:
          </p>
          <p>
            ${this.props.analysis.last.average.toString()}
          </p>
          <p className="lead">
            and the standard deviation of the last price is:
          </p>
          <p>
            ${this.props.analysis.last.standardDeviation.toString()}
          </p>
          <p className="pt-5">
            Return back to the <Link to="/" href="/">Parameters Page</Link>
          </p>
        </div>
      </div>
    );
  }
}

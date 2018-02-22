import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './utilities/Navigation';
import StandardDistributionGraph from './analysis/StandardDistributionGraph';
import PlotGraph from '../utilities/PlotGraph';
import { calculateZScore, getZPercent} from '../utilities/analysis';

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

  constructor(props) {
    super(props);
    this.state = {
      higher: '',
      lower: '',
    };
    this.setHigher = this.setHigher.bind(this);
    this.setLower = this.setLower.bind(this);
  }

  componentWillMount() {
    if (_.isEmpty(this.props.analysis) || !this.props.analysis.loading) {
      this.startAnalysis();
    }
  }

  setHigher(higher) {
    this.setState({ higher });
  }

  setLower(lower) {
    this.setState({ lower });
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

    // Ensure valid higher/lower bound
    const { higher, lower } = this.state;
    const highBoundIsValid = _.isFinite(_.toNumber(higher)) && higher !== '';
    const lowBoundIsValid = _.isFinite(_.toNumber(lower)) && lower !== '';

    let maxOverlayData = [];
    let lastOverLayData = [];
    let highBoundCoverage = 0;
    if (highBoundIsValid) {
      maxOverlayData = PlotGraph.plotGraphAbove(
        _.toNumber(higher),
        this.props.analysis.maximum.average,
        this.props.analysis.maximum.standardDeviation,
      );
      lastOverLayData = PlotGraph.plotGraphAbove(
        _.toNumber(higher),
        this.props.analysis.last.average,
        this.props.analysis.last.standardDeviation,
      );
      const highBoundZ = calculateZScore(
        _.toNumber(higher),
        this.props.analysis.maximum.average,
        this.props.analysis.maximum.standardDeviation,
      );
      highBoundCoverage = (1 - getZPercent(highBoundZ)) * 100;
    }

    let minOverlayData = [];
    let lastSecondaryOverlayData = [];
    let lowBoundCoverage = 0;
    if (lowBoundIsValid) {
      minOverlayData = PlotGraph.plotGraphBelow(
        _.toNumber(lower),
        this.props.analysis.minimum.average,
        this.props.analysis.minimum.standardDeviation,
      );
      lastSecondaryOverlayData = PlotGraph.plotGraphBelow(
        _.toNumber(lower),
        this.props.analysis.last.average,
        this.props.analysis.last.standardDeviation,
      );
      const lowBoundZ = calculateZScore(
        _.toNumber(lower),
        this.props.analysis.minimum.average,
        this.props.analysis.minimum.standardDeviation,
      );
      lowBoundCoverage = getZPercent(lowBoundZ) * 100;
    }

    return (
      <div>
        <Navigation current="/analysis" />
        <div className="col-12 text-center py-5 my-5">
          <div className="form-group col-12 col-sm-4 offset-sm-4">
            <label htmlFor="higher">
              Higher Bound
            </label>
            <input
              className="form-control"
              id="higher"
              onChange={event => this.setHigher(event.target.value)}
              type="text"
              value={this.state.higher}
            />
            <label htmlFor="lower">
              Lower Bound
            </label>
            <input
              className="form-control"
              id="lower"
              onChange={event => this.setLower(event.target.value)}
              type="text"
              value={this.state.lower}
            />
          </div>
          <StandardDistributionGraph
            title="Last"
            graphData={PlotGraph.plotGraph(
              this.props.analysis.last.average,
              this.props.analysis.last.standardDeviation,
            )}
            overlayData={lastOverLayData}
            secondaryOverlayData={lastSecondaryOverlayData}
          />
          <p className="lead">
            The average of the last price is: ${this.props.analysis.last.average.toFixed(4)} and the standard deviation of the last price is: ${this.props.analysis.last.standardDeviation.toFixed(4)}
          </p>
          <StandardDistributionGraph
            title="Maximum"
            graphData={PlotGraph.plotGraph(
              this.props.analysis.maximum.average,
              this.props.analysis.maximum.standardDeviation,
            )}
            overlayData={maxOverlayData}
          />
          <p className="lead">
            The average of the maximum is: ${this.props.analysis.maximum.average.toFixed(4)} and the standard deviation of the maximum is: ${this.props.analysis.maximum.standardDeviation.toFixed(4)}
          </p>
          {highBoundCoverage > 0 && (
            <h6>
              There is a {highBoundCoverage.toFixed(2)}% change your high bound
              is hit within the maxiumum values, using this data set
            </h6>
          )}
          <StandardDistributionGraph
            title="Minimum"
            graphData={PlotGraph.plotGraph(
              this.props.analysis.minimum.average,
              this.props.analysis.minimum.standardDeviation,
            )}
            overlayData={minOverlayData}
          />
          <p className="lead">
            The average of the minimum is: ${this.props.analysis.minimum.average.toFixed(4)} and the standard deviation of the minimum is ${this.props.analysis.minimum.standardDeviation.toFixed(4)}
          </p>
          {lowBoundCoverage > 0 && (
            <h6>
              There is a {lowBoundCoverage.toFixed(2)}% change your high bound
              is hit within the minimum values, using this data set
            </h6>
          )}
          <p className="pt-5">
            Return back to the <Link to="/" href="/">Parameters Page</Link>
          </p>
        </div>
      </div>
    );
  }
}

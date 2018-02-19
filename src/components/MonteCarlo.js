import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DateSelector from './montecarlo/DateSelector';
import Inputs from './montecarlo/Inputs';
import IterationInput from './montecarlo/IterationInput';
import SubmitButton from './montecarlo/SubmitButton';
import Loading from './montecarlo/Loading';
import ResultsTable from './results/ResultsTable';

export default class MonteCarlo extends Component {
  static propTypes = {
    startMonteCarlo: PropTypes.func.isRequired,
    iterations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    progress: PropTypes.number.isRequired,
    running: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      // Dates
      startDate: moment(),
      endDate: moment().add(1, 'month'),
      // Set Values
      iterations: '50',
      price: '3.00',
      volatility: '0.00',
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleIterationChange = this.handleIterationChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleVolatilityChange = this.handleVolatilityChange.bind(this);

    this.handleStartCalculations = this.handleStartCalculations.bind(this);
  }

  handleStartDateChange(startDate) {
    this.setState({ startDate: moment(startDate) });
  }

  handleEndDateChange(endDate) {
    this.setState({ endDate: moment(endDate) });
  }

  handleIterationChange(iterations) {
    this.setState({ iterations });
  }

  handlePriceChange(price) {
    this.setState({ price });
  }

  handleVolatilityChange(volatility) {
    this.setState({ volatility });
  }

  handleStartCalculations() {
    this.props.startMonteCarlo(
      _.toNumber(this.state.iterations),
      _.toNumber(this.state.price),
      _.toNumber(this.state.volatility),
      this.state.endDate.diff(this.state.startDate, 'days') + 1,
    );
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Monte Carlo Simulator</h1>
          <p className="lead">
            This is a simple Monte Carlo simulator. Please read these instructions before use.
          </p>
          <div className="row mt-5">
            <DateSelector
              endDate={this.state.endDate}
              startDate={this.state.startDate}
              handleEndDateChange={this.handleEndDateChange}
              handleStartDateChange={this.handleStartDateChange}
            />
            <Inputs
              price={this.state.price}
              volatility={this.state.volatility}
              handlePriceChange={this.handlePriceChange}
              handleVolatilityChange={this.handleVolatilityChange}
            />
            <IterationInput
              iterations={this.state.iterations}
              handleIterationChange={this.handleIterationChange}
            />
          </div>
          <div className="row">
            <SubmitButton
              handleStartCalculations={this.handleStartCalculations}
              iterationLength={_.toNumber(this.state.iterations)}
              progress={this.props.progress}
              running={this.props.running}
            />
          </div>
          <Loading
            iterations={_.toNumber(this.state.iterations)}
            progress={this.props.progress}
            running={this.props.running}
          />
        </div>
        {this.props.iterations.length > 0 && (
          <div className="row">
            <ResultsTable iterations={this.props.iterations} />
          </div>
        )}
      </div>
    );
  }
}

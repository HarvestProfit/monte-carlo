import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DateSelector from './montecarlo/DateSelector';
import Inputs from './montecarlo/Inputs';

export default class MonteCarlo extends Component {
  static propTypes = {
    startMonteCarlo: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment().add(1, 'month'),
      volatility: '0.00',
      price: '3.00',
    };
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleVolatilityChange = this.handleVolatilityChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleStartDateChange(startDate) {
    this.setState({ startDate: moment(startDate) });
  }

  handleEndDateChange(endDate) {
    this.setState({ endDate: moment(endDate) });
  }

  handleVolatilityChange(volatility) {
    this.setState({ volatility });
  }

  handlePriceChange(price) {
    this.setState({ price });
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
          </div>
          <div className="col-12 mt-5">
            <button className="btn btn-primary btn-block">
              Calculate
            </button>
          </div>
        </div>
      </div>
    );
  }
}

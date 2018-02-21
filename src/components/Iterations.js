import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import IterationGraph from './iterations/IterationGraph';
import IterationSummary from './iterations/IterationSummary';
import NoIterations from './iterations/NoIterations';
import ResultsTable from './iterations/ResultsTable';
import Navigation from './utilities/Navigation';

// eslint-disable-next-line
export default class Iterations extends Component {
  static propTypes = {
    iterations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    start: PropTypes.shape({
      format: PropTypes.func,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      iteration: 0,
    };
    this.setIteration = this.setIteration.bind(this);
  }

  setIteration(iteration) {
    this.setState({ iteration });
  }

  render() {
    const { iterations, start } = this.props;
    if (iterations.length === 0 || start === null) {
      return (
        <div>
          <Navigation current="/iterations" />
          <NoIterations />
        </div>
      );
    }

    const selectedIteration = iterations[this.state.iteration];
    const graphData = selectedIteration.map((iteration, index) => {
      const date = moment(start).add(index + 1, 'days');
      const data = {
        date: date.toDate(),
        value: iteration,
      };
      if (selectedIteration.length < 100) {
        data.label = `$${iteration.toFixed(3)} on ${date.format('L')}`;
      }
      return data;
    });

    return (
      <div>
        <Navigation current="/iterations" />
        <IterationGraph graphData={graphData} />
        <IterationSummary index={this.state.iteration + 1} iteration={selectedIteration} />
        <p className="lead text-center">
          Click on an Iteration to View Summary. Only viewing 50 of {this.props.iterations.length}
        </p>
        <ResultsTable
          iterations={this.props.iterations.slice(0, 50)}
          selected={this.state.iteration}
          setIteration={this.setIteration}
        />
      </div>
    );
  }
}

import PropTypes from 'prop-types';
import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';

const IterationGraph = props => (
  <div className="col-12 col-sm-8 offset-sm-2">
    <VictoryChart
      containerComponent={<VictoryVoronoiContainer />}
      domainPadding={20}
      height={200}
      scale={{ x: 'time' }}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        dependentAxis
        tickFormat={y => `$${y.toFixed(2)}`}
      />
      <VictoryAxis />
      <VictoryLine
        data={props.graphData}
        labelComponent={<VictoryTooltip />}
        x="date"
        y="value"
      />
    </VictoryChart>
  </div>
);

IterationGraph.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    value: PropTypes.number,
  })).isRequired,
};

export default IterationGraph;

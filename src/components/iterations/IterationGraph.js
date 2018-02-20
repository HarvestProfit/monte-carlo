import moment from 'moment';
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
        animate={{
          onLoad: { duration: 1000, easing: 'linearIn' },
          onEnter: { duration: 1000, easing: 'bounce' },
        }}
        data={props.graphData}
        labels={d => `$${d.value.toFixed(3)} on ${moment(d.date).format('L')}`}
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

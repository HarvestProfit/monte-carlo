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
      animate={{ duration: 100 }}
      containerComponent={<VictoryVoronoiContainer />}
      domainPadding={20}
      height={200}
      scale={{ x: 'time' }}
      theme={VictoryTheme.material}
    >
      <VictoryAxis
        dependentAxis
        tickFormat={y => `$${y.toFixed(3)}`}
      />
      <VictoryAxis />
      <VictoryLine
        data={props.graphData}
        labels={d => `$${d.value.toFixed(2)} on ${moment(d.date).format('L')}`}
        labelComponent={<VictoryTooltip />}
        x="date"
        y="value"
        animate={{
          onExit: {
            duration: 100,
            before: () => ({
                _y: 0,
            }),
          },
        }}
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

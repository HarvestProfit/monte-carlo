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

const StandardDistributionGraph = props => (
  <div className="col-12 col-sm-8 offset-sm-2">
    <h3 className="pt-4">{props.title}</h3>
    <VictoryChart
      containerComponent={<VictoryVoronoiContainer />}
      domainPadding={20}
      height={200}
      theme={VictoryTheme.material}
      title={props.title}
    >
      <VictoryAxis
        fixLabelOverlap
        tickFormat={x => `$${x.toFixed(3)}`}
        tickValues={props.graphData.map(d => d.xValue)}
      />
      <VictoryLine
        data={props.graphData}
        interpolation="natural"
        labelComponent={<VictoryTooltip />}
        x="xValue"
        y="yValue"
      />
    </VictoryChart>
  </div>
);

StandardDistributionGraph.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.shape({
    xValue: PropTypes.number,
    yValue: PropTypes.number,
  })).isRequired,
  title: PropTypes.string.isRequired,
};

export default StandardDistributionGraph;

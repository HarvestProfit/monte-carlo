import PropTypes from 'prop-types';
import React from 'react';
import {
  VictoryArea,
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
      padding={{ top: 30, bottom: 30 }}
      theme={VictoryTheme.material}
      title={props.title}
    >
      <VictoryAxis
        label={`${props.title} Distribution`}
        tickFormat={() => ''}
      />
      <VictoryLine
        data={props.graphData}
        interpolation="natural"
        labelComponent={<VictoryTooltip />}
        x="xValue"
        y="yValue"
      />
      {props.overlayData.length > 0 && (
        <VictoryArea
          data={props.overlayData}
          interpolation="natural"
          labelComponent={<VictoryTooltip />}
          x="xValue"
          y="yValue"
        />
      )}
      {props.secondaryOverlayData.length > 0 && (
        <VictoryArea
          data={props.secondaryOverlayData}
          interpolation="natural"
          labelComponent={<VictoryTooltip />}
          x="xValue"
          y="yValue"
        />
      )}
    </VictoryChart>
  </div>
);

StandardDistributionGraph.propTypes = {
  graphData: PropTypes.arrayOf(PropTypes.shape({
    xValue: PropTypes.number,
    yValue: PropTypes.number,
  })).isRequired,
  overlayData: PropTypes.arrayOf(PropTypes.shape({
    xValue: PropTypes.number,
    yValue: PropTypes.number,
  })),
  secondaryOverlayData: PropTypes.arrayOf(PropTypes.shape({
    xValue: PropTypes.number,
    yValue: PropTypes.number,
  })),
  title: PropTypes.string.isRequired,
};

StandardDistributionGraph.defaultProps = {
  overlayData: [],
  secondaryOverlayData: [],
};

export default StandardDistributionGraph;

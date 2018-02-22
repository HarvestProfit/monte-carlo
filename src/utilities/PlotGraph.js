import standardNormalDistributionYValue from './standardNormalDistribution';

class PlotGraph {
  static loopPoints(p, mean, stdDev) {
    const points = [];
    for (let i = 1; i < p; i += 1) {
      points.push(PlotGraph.loopPointValue(i / 10, mean, stdDev));
    }
    for (let i = -1; i > -p; i -= 1) {
      points.push(PlotGraph.loopPointValue(i / 10, mean, stdDev));
    }
    points.push(PlotGraph.loopPointValue(0, mean, stdDev));
    return points;
  }

  static loopPointValue(index, mean, stdDev) {
    const xValue = mean + (index * stdDev);
    return {
      xValue,
      yValue: PlotGraph.loopPointYValue(xValue, mean, stdDev),
    };
  }

  static loopPointYValue(x, mean, stdDev) {
    return standardNormalDistributionYValue(mean, stdDev, x);
  }

  static plotGraph(mean, stdDev) {
    return PlotGraph.loopPoints(50, mean, stdDev);
  }

  static plotGraphAbove(value, mean, stdDev) {
    const points = [
      {
        xValue: value,
        yValue: PlotGraph.loopPointYValue(value, mean, stdDev),
      },
    ];
    const coveredPoints = PlotGraph.plotGraph(mean, stdDev).filter(point =>
      point.xValue > value);
    return [
      ...points,
      ...coveredPoints,
    ];
  }

  static plotGraphBelow(value, mean, stdDev) {
    const points = [
      {
        xValue: value,
        yValue: PlotGraph.loopPointYValue(value, mean, stdDev),
      },
    ];
    const coveredPoints = PlotGraph.plotGraph(mean, stdDev).filter(point =>
      point.xValue < value);
    return [
      ...points,
      ...coveredPoints,
    ];
  }
}

export default PlotGraph;

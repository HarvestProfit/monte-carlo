import standardNormalDistributionYValue from '../../utilities/standardNormalDistribution';

describe('standardNormalDistributionYValue', () => {
  // This is a standard normal distribution. Google It.
  it('should correctly calculate the plot point given basic values', () => {
    const value = standardNormalDistributionYValue(0, 1, 0);
    expect(value).toBeCloseTo(0.3989422804014327, 10);
  });
});

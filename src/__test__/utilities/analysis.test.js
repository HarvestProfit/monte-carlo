import analysis, { calculateZScore, getZPercent } from '../../utilities/analysis';

describe('analysis', () => {
  describe('minimum values', () => {
    // This is a standard normal distribution. Google It.
    it('should correctly calculate the minimum values', () => {
      const arrayOfArrays = [
        [-1, 0, 1],
        [-1, 0, 1],
        [-1, 0, 1],
      ];
      const value = analysis(arrayOfArrays);
      expect(value).toHaveProperty('minimum.average', -1);
      expect(value).toHaveProperty('minimum.standardDeviation', 0);
    });

    it('should correctly calculate the minimum values if they have variation', () => {
      const arrayOfArrays = [
        [-1, -1, -1],
        [0, 0, 0],
        [1, 1, 1],
      ];
      const value = analysis(arrayOfArrays);
      expect(value).toHaveProperty('minimum.average', 0);
      expect(value.minimum.standardDeviation).toEqual(1);
    });
  });

  describe('maximum values', () => {
    it('should correctly calculate the maximum values', () => {
      const arrayOfArrays = [
        [-1, 0, 1],
        [-1, 0, 1],
        [-1, 0, 1],
      ];
      const value = analysis(arrayOfArrays);
      expect(value).toHaveProperty('maximum.average', 1);
      expect(value).toHaveProperty('maximum.standardDeviation', 0);
    });

    it('should correctly calculate the maximum values if they have variation', () => {
      const arrayOfArrays = [
        [-1, -1, -1],
        [0, 0, 0],
        [1, 1, 1],
      ];
      const value = analysis(arrayOfArrays);
      expect(value).toHaveProperty('maximum.average', 0);
      expect(value.maximum.standardDeviation).toEqual(1);
    });
  });

  describe('average values', () => {
    it('should correctly calculate the average values', () => {
      const arrayOfArrays = [
        [-1, 0, 1],
        [-1, 0, 1],
        [-1, 0, 1],
      ];
      const value = analysis(arrayOfArrays);
      expect(value).toHaveProperty('average.average', 0);
      expect(value).toHaveProperty('average.standardDeviation', 0);
    });

    it('should correctly calculate the average values if they have variation', () => {
      const arrayOfArrays = [
        [-1, -1, -1],
        [0, 0, 0],
        [1, 1, 1],
      ];
      const value = analysis(arrayOfArrays);
      expect(value).toHaveProperty('average.average', 0);
      expect(value.average.standardDeviation).toEqual(1);
    });
  });

  describe('last values', () => {
    it('should correctly calculate the last values', () => {
      const arrayOfArrays = [
        [-1, 0, 1],
        [-1, 0, 1],
        [-1, 0, 1],
      ];
      const value = analysis(arrayOfArrays);
      expect(value).toHaveProperty('last.average', 1);
      expect(value).toHaveProperty('last.standardDeviation', 0);
    });

    it('should correctly calculate the last values if they have variation', () => {
      const arrayOfArrays = [
        [-1, -1, -1],
        [0, 0, 0],
        [1, 1, 1],
      ];
      const value = analysis(arrayOfArrays);
      expect(value).toHaveProperty('last.average', 0);
      expect(value.last.standardDeviation).toEqual(1);
    });
  });
});

describe('calculateZScore', () => {
  it('should calculate the z-score correctly', () => {
    const zScore = calculateZScore(8, 5, 5);
    expect(zScore).toEqual(0.6);
  });
});

describe('getZPercent', () => {
  it('should get the percent for the z-score correctly', () => {
    const zScore = getZPercent(0.24);
    expect(zScore).toBeCloseTo(0.5948348716974494, 10);
  });
});

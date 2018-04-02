import analysis, { getAverage, getSampleAverage, getStandardDeviation, getMaxFromSingleIteration, getMinFromSingleIteration, getLastFromSingleIteration, calculateZScore, getZPercent } from '../../utilities/analysis';


describe('getAverage', () => {
  it('return value 0 if array length is 0', () => {
    const array = [];
    expect(getAverage(array)).toEqual(0);
  });

  it('return average value of array items', () => {
    const array = [1, 1, 1, 1];
    expect(getAverage(array)).toEqual(1);
  });
});

describe('getSampleAverage', () => {
  it('return value 0 if array length is 1 or 0', () => {
    const array = [1];
    expect(getSampleAverage(array)).toEqual(0);
  });

  it('return value of sum of array items devided by array length - 1', () => {
    const array = [1, 1, 1, 1, 1];
    expect(getSampleAverage(array)).toEqual(1.25);
  });
});

describe('getStandardDeviation', () => {
  it('return the square root of the getSampleAverage of the variences', () => {
    const array = [5, 10, 15, 20, 25];
    expect(getStandardDeviation(array)).toBeCloseTo(7.91, 2);
  });
});

describe('getMaxFromSingleIteration', () => {
  it('return maximum item value from an array', () => {
    const array = [1, 2, 3];
    expect(getMaxFromSingleIteration(array)).toEqual(3);
  });
});

describe('getMinFromSingleIteration', () => {
  it('return minimum item value from an array', () => {
    const array = [1, 2, 3];
    expect(getMinFromSingleIteration(array)).toEqual(1);
  });
});

describe('getLastFromSingleIteration', () => {
  it('return the value of the last array item entered', () => {
    const array = [1, 2, 3];
    expect(getLastFromSingleIteration(array)).toEqual(3);
  });
});

describe('analysis', () => {
  it('return an object composed of the standard deviation, average minimum, average maximum, average last and average average of the iterations', () => {
    const data =
    [[1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]];

    const result = {
      minimum: {
        average: 1,
        standardDeviation: 0,
      },

      maximum: {
        average: 3,
        standardDeviation: 0,
      },
      last: {
        average: 3,
        standardDeviation: 0,
      },
      average: {
        average: 2,
        standardDeviation: 0,
      },
    };

    expect(analysis(data)).toEqual(result);
  });
});

describe('calculateZScore', () => {
  it('Return the Z score of a given x coordinate', () => {
    const x = 4;
    const mean = 2;
    const stdDev = 2;

    expect(calculateZScore(x, mean, stdDev)).toEqual(1);
  });
});

describe('getZPercent', () => {
  it('Return the 0.0 percentile associated with a Z score less than -6.5', () => {
    const z = -7;
    expect(getZPercent(z)).toEqual(0);
  });

  it('Return the 1.0 percentile associated with a Z score less than 6.5', () => {
    const z = 7;

    expect(getZPercent(z)).toEqual(1);
  });

  it('Return the percentile associated with a related Z score', () => {
    const result = 0.6914624612745666;
    expect(getZPercent(0.5)).toEqual(result);
  });
});

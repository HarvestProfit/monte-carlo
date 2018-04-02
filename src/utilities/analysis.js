import _ from 'lodash';

/**
 * Gets the mean of an array of numbers
 * @param {[number]} array Array of numbers
 * @return {number} Mean of the array of numbers
 */
export function getAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  return _.sum(array) / array.length;
}

/**
 * Gets the average of an array of numbers.
 * Intended for samples representing a larger population.
 * @param {[number]} array Array of numbers
 * @return {number} Mean of the array of numbers
 */
export function getSampleAverage(array) {
  if (array.length - 1 < 1) {
    return 0;
  }
  return _.sum(array) / (array.length - 1);
}

/**
 * Gets the standard deviation from an array of numbers
 * @param {[number]} array Array of numbers
 * @return {number} Standard Deviation of the array of numbers
 */
export function getStandardDeviation(array) {
  const average = getAverage(array);
  const variances = _.map(array, v => (v - average) ** 2);
  const variance = getSampleAverage(variances);
  return Math.sqrt(variance);
}

/**
 * Gets the maximum from a single iteration of steps
 * @param {[number]} array Array of numbers representing steps
 * @return {number} The maximum value from the array
 */
export function getMaxFromSingleIteration(array) {
  return _.max(array);
}

/**
 * Gets the minimum from a single iteration of steps
 * @param {[number]} array Array of numbers representing steps
 */
export function getMinFromSingleIteration(array) {
  return _.min(array);
}

/**
 * Gets the average from a single iteration of steps
 * @param {[number]} array Array of numbers representing steps
 */
export function getAverageFromSingleIteration(array) {
  return getAverage(array);
}

/**
 * Gets the last from a single iteration of steps
 * @param {[number]} array Array of numbers representing steps
 */
export function getLastFromSingleIteration(array) {
  return array[array.length - 1];
}

/**
 * Takes a list of iterations, and returns an object with the standard
 * deviation and averages of the minimum, maximum, last, and average value
 * from said list.
 * @param {[[number]]} iterations Array of arrays of numbers
 * @return {Object} The object (@see reducers/analysis for more detail)
 */
export default function analysis(iterations) {
  const data = {
    minimum: {
      average: 0,
      standardDeviation: 0,
    },
    maximum: {
      average: 0,
      standardDeviation: 0,
    },
    last: {
      average: 0,
      standardDeviation: 0,
    },
    average: {
      average: 0,
      standardDeviation: 0,
    },
  };

  // Get the minimum average and std. dev.
  const minimums = _.map(iterations, getMinFromSingleIteration);
  data.minimum.average = _.sum(minimums) / minimums.length;
  data.minimum.standardDeviation = getStandardDeviation(minimums);

  // Get the maximum average and std. dev.
  const maximums = _.map(iterations, getMaxFromSingleIteration);
  data.maximum.average = _.sum(maximums) / maximums.length;
  data.maximum.standardDeviation = getStandardDeviation(maximums);

  // Get the average average and std. dev.
  const averages = _.map(iterations, getAverageFromSingleIteration);
  data.average.average = _.sum(averages) / averages.length;
  data.average.standardDeviation = getStandardDeviation(averages);

  // Get the last average
  const lasts = _.map(iterations, getLastFromSingleIteration);
  data.last.average = _.sum(lasts) / lasts.length;
  data.last.standardDeviation = getStandardDeviation(lasts);

  return data;
}

/**
 * Calculates the Z score of a given x coordinate
 * @param {number} x The X coordinate to locate
 * @param {number} mean The average (centerpoint)
 * @param {number} stdDev The standard deviation
 * @return {number} The Z score of the X coordinate
 */
export function calculateZScore(x, mean, stdDev) {
  return (x - mean) / stdDev;
}

/**
 * Takes a given Z score, and returns the percentile
 * Z Scores require at least 30 population measurements to be effective,
 * and we assume people have at least 30 monte carlo iterations stored
 * @param {number} z The z-score to measure
 * @return {number} The percentile the Z score is found in
 */
export function getZPercent(z) {
  // If Z is infetismally low, just return 0
  if (z < -6.5) {
    return 0.0;
  }
  // If Z is infetismally high, just return 1
  if (z > 6.5) {
    return 1.0;
  }

  // The main function/process. Really messy.
  let factK = 1;
  let sum = 0;
  let term = 1;
  let k = 0;
  const loopStop = Math.exp(-23);
  while (Math.abs(term) > loopStop) {
    // TODO: Clean/break this up
    // eslint-disable-next-line
    term = .3989422804 * Math.pow(-1, k) * Math.pow(z, k) / (2 * k + 1) / Math.pow(2, k) * Math.pow(z, k+1) / factK;
    sum += term;
    k += 1;
    factK *= k;
  }
  sum += 0.5;

  return sum;
}

import _ from 'lodash';

/**
 * Gets the mean of an array of numbers
 * @param {[number]} array Array of numbers
 * @return {number} Mean of the array of numbers
 */
function getAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  return _.sum(array) / array.length;
}

/**
 * Gets the standard deviation from an array of numbers
 * @param {[number]} array Array of numbers
 * @return {number} Standard Deviation of the array of numbers
 */
function getStandardDeviation(array) {
  const average = getAverage(array);
  const variances = _.map(array, v => (v - average) ** 2);
  const variance = getAverage(variances);
  return Math.sqrt(variance);
}

/**
 * Gets the maximum from a single iteration of steps
 * @param {[number]} array Array of numbers representing steps
 * @return {number} The maximum value from the array
 */
function getMaxFromSingleIteration(array) {
  return _.max(array);
}

/**
 * Gets the minimum from a single iteration of steps
 * @param {[number]} array Array of numbers representing steps
 */
function getMinFromSingleIteration(array) {
  return _.min(array);
}

/**
 * Gets the average from a single iteration of steps
 * @param {[number]} array Array of numbers representing steps
 */
function getAverageFromSingleIteration(array) {
  return getAverage(array);
}

/**
 * Gets the last from a single iteration of steps
 * @param {[number]} array Array of numbers representing steps
 */
function getLastFromSingleIteration(array) {
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
    minimum: {},
    maximum: {},
    last: {},
    average: {},
  };

  // Get the minimum average
  data.minimum.average = _.sumBy(
    iterations,
    getMinFromSingleIteration,
  ) / iterations.length;

  // Get the minimum std. dev.
  data.minimum.standardDeviation = getStandardDeviation(_.map(
    iterations,
    getMinFromSingleIteration,
  )) / iterations.length;

  // // Get the maximum avgerage
  data.maximum.average = _.sumBy(
    iterations,
    getMaxFromSingleIteration,
  ) / iterations.length;

  // // Get the maxiumum std. dev.
  data.maximum.standardDeviation = getStandardDeviation(_.map(
    iterations,
    getMaxFromSingleIteration,
  )) / iterations.length;

  // // Get the maximum avgerage
  data.average.average = _.sumBy(
    iterations,
    getAverageFromSingleIteration,
  ) / iterations.length;

  // // Get the maxiumum std. dev.
  data.average.standardDeviation = getStandardDeviation(_.map(
    iterations,
    getAverageFromSingleIteration,
  )) / iterations.length;

  // // Get the maximum avgerage
  data.last.average = _.sumBy(
    iterations,
    getLastFromSingleIteration,
  ) / iterations.length;

  // // Get the maxiumum std. dev.
  data.last.standardDeviation = getStandardDeviation(_.map(
    iterations,
    getLastFromSingleIteration,
  )) / iterations.length;

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

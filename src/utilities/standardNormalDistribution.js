/**
 * This set of functions calculates the plot point of a standard normal distribution.
 */

/**
 * Calculates the value of the negative exponent as part of the standard normal distribution.
 * @param {number} mean The mean of the bell curve value
 * @param {number} standardDeviation The standard deviation from the mean
 * @param {number} x The x coordinate on the axis (somewhere between min and mox, hopefully)
 * @return {number} The negative exponent value
 */
function exponentialValue(mean, standardDeviation, x) {
  const e = Math.E;
  const exponentNumerator = (x - mean) ** 2;
  const exponentDenominator = 2 * (standardDeviation ** 2);
  const exponent = exponentNumerator / exponentDenominator;
  return e ** -(exponent);
}

/**
 * Calculates the value of the negative exponent as part of the standard normal distribution.
 * @param {number} mean The mean of the bell curve value
 * @param {number} standardDeviation The standard deviation from the mean
 * @return {number} The negative exponent value
 */
function nonExponentialValue(standardDeviation) {
  const squareRoot = Math.sqrt(2 * Math.PI);
  return 1 / (standardDeviation * squareRoot);
}

/**
 * Function returning the standard normal distribution of a point on the
 * "Bell Curve". Incredibly simple.
 * @param {number} mean The mean of the bell curve value
 * @param {number} standardDeviation The standard deviation from the mean
 * @param {number} x The x coordinate on the axis (somewhere between min and mox, hopefully)
 * @return {number} The Y value for the X coordinate given
 */
export default function standardNormalDistributionYValue(mean, standardDeviation, x) {
  const firstVariable = nonExponentialValue(standardDeviation);
  const secondVariable = exponentialValue(mean, standardDeviation, x);

  return firstVariable * secondVariable;
}

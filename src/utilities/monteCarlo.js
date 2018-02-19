export default class MonteCarlo {
  /**
   * Runs a single iteration, simulating a whole set of trading days
   * @param {number} steps The number of "days" in this trading simulation
   * @param {number} startPrice The price to start from
   * @param {number} dailyVolatility The potential daily volatility. NOT annual. DAILY.
   * @return {Array} The iteration values (an array of numbers)
   */
  static singleIteration(steps, startPrice, dailyVolatility) {
    const iterationValues = [];
    let price = startPrice;
    for (let i = 0; i < steps; i += 1) {
      const newPrice = MonteCarlo.singleIterationStep(price, dailyVolatility);
      iterationValues.push(newPrice);
      price = newPrice;
    }
    return iterationValues;
  }

  /**
   * Runs a single step in an interation (usually simulating one day)
   * @param {number} lastPrice The ending price from the previous step
   * @param {number} dailyVolatility The potential daily volatility. NOT annual. DAILY.
   * @return {number} The new price
   */
  static singleIterationStep(lastPrice, dailyVolatility) {
    const volatility = MonteCarlo.randomNumber() * dailyVolatility;
    const price = lastPrice * (1 + volatility);
    return price;
  }

  /**
   * Gets a random number between -1 and 1, that isn't zero.
   * Zero means the number doesn't change, therefore 1
   * @return {number} The random number between -1 and 1
   */
  static randomNumber() {
    const number = (Math.random() * 10) - 5;
    if (number === 0) {
      return 1;
    }
    return number / 5;
  }
}

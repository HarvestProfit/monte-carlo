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
      let newPrice = 0;
      while (newPrice <= 0) {
        newPrice = MonteCarlo.singleIterationStep(price, dailyVolatility, startPrice);
      }
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
  static singleIterationStep(lastPrice, dailyVolatility, startPrice) {
    const volatility = MonteCarlo.randomNumber() * dailyVolatility;
    const priceChange = startPrice * (volatility);
    const price = lastPrice + priceChange;
    return price;
  }

  /**
   * Gets a random number with a mean of 0 and standard deviation of 1.
   * @see https://en.wikipedia.org/wiki/Normal_distribution#Generating_values_from_normal_distribution
   * @return {number} The random number between -1 and 1
   */
  static randomNumber() {
    let random = 0;
    for (let i = 0; i < 12; i += 1) {
      random += Math.random();
    }
    return random - 6;
  }
}

export default class MonteCarlo {
  static singleIteration(steps, lastPrice, dailyVolatility) {
    const iterationValues = [];
    let price = lastPrice;
    for (let i = 0; i < steps; i += 1) {
      const newPrice = MonteCarlo.singleIterationStep(price, dailyVolatility);
      iterationValues.push(newPrice);
      price = newPrice;
    }
    return iterationValues;
  }

  static singleIterationStep(lastPrice, dailyVolatility) {
    const volatility = MonteCarlo.randomNumber() * dailyVolatility;
    const price = lastPrice * (1 + volatility);
    return price;
  }

  /**
   * Gets a random number between -1 and 1, that isn't zero.
   * Zero means the number doesn't change, therefore 1
   */
  static randomNumber() {
    const number = (Math.random() * 10) - 5;
    if (number === 0) {
      return 1;
    }
    return number / 5;
  }
}

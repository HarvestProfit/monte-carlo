export const START_MONTE_CARLO = 'START_MONTE_CARLO';
export const END_MONTE_CARLO = 'END_MONTE_CARLO';

/**
 * Starts a monte carlo simulation
 * @param {number} iterations The number of iterations to run
 * @param {number} price The price to start each iteration at
 * @param {number} volatility The annualized volatily as a whole number
 * @param {number} steps The count of steps each iteration must go through
 * @return {{type: string, iterations: number, price: number, volatily: number, steps: number}}
 */
export function startMonteCarlo(iterations, price, volatility, steps) {
  const dailyVolatility = (volatility / 100) * (steps / 365);
  return {
    type: START_MONTE_CARLO,
    iterations,
    price,
    volatility: dailyVolatility,
    steps,
  };
}

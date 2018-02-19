export const START_MONTE_CARLO = 'START_MONTE_CARLO';
export const END_MONTE_CARLO = 'END_MONTE_CARLO';

export function startMonteCarlo(iterations, price, volatility) {
  return {
    type: START_MONTE_CARLO,
    iterations,
    price,
    volatility,
  };
}

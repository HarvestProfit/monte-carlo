import { take, fork, call, put } from 'redux-saga/effects';
import MonteCarlo from '../utilities/monteCarlo';

import {
  ADD_ITERATIONS,
  CLEAR_ITERATIONS,
} from '../actions/iterations';

import {
  START_MONTE_CARLO,
  END_MONTE_CARLO,
} from '../actions/monteCarlo';

import {
  PROGRESS_UPDATE,
  PROGRESS_CLEAR,
} from '../actions/progress';

/**
 * Runs a single iteration
 * @param {number} steps The number of steps in this iteration
 * @param {number} price The price to start at
 * @param {number} dailyVolatility The potential daily volatility. NOT annual. DAILY.
 */
function runSingleIteration(steps, price, dailyVolatility) {
  const lastPrice = MonteCarlo.singleIteration(steps, price, dailyVolatility);
  return lastPrice;
}

/**
 * Runs a single iteration
 * @param {number} iterations The iterations to loop through
 * @param {number} steps The number of steps in this iteration
 * @param {number} price The price to start at
 * @param {number} dailyVolatility The potential daily volatility. NOT annual. DAILY.
 */
function loopThroughIterations(iterations, steps, price, volatility) {
  const results = [];
  for (let iteration = 0; iteration < iterations; iteration += 1) {
    results.push(runSingleIteration(steps, price, volatility, iteration));
  }
  return results;
}

/**
 * Runs the monte carlo simulation
 * @param {number} iterations The number of iterations to run
 * @param {number} price The price to start at
 * @param {number} volatility The volatility to adjust by
 * @param {number} steps The number of steps (days) in a single iteration
 */
function* runMonteCarloSimulation(iterations, price, volatility, steps) {
  try {
    yield put({ type: PROGRESS_CLEAR });
    yield put({ type: CLEAR_ITERATIONS });
    if (iterations > 5000) {
      const iterationsToRun = yield Math.floor(iterations / 5000);
      const remainingIterations = yield iterations % 5000;
      // Loop through iterations in groups of 5000
      for (let loop = 0; loop < iterationsToRun; loop += 1) {
        const results = yield call(loopThroughIterations, 5000, steps, price, volatility);
        yield put({ type: ADD_ITERATIONS, payload: results });
        yield put({ type: PROGRESS_UPDATE, payload: 5000 * (loop + 1) });
      }
      // Get the remaining iterations
      const finalResults = yield call(
        loopThroughIterations,
        remainingIterations,
        steps, price,
        volatility,
      );
      yield put({ type: ADD_ITERATIONS, payload: finalResults });
      yield put({ type: PROGRESS_UPDATE, payload: iterations });
    } else {
      const results = yield call(loopThroughIterations, iterations, price, volatility, steps);
      yield put({ type: ADD_ITERATIONS, payload: results });
      yield put({ type: PROGRESS_UPDATE, payload: iterations });
    }
    yield put({ type: END_MONTE_CARLO });
  } catch (error) {
    console.error(error);
  }
}

/**
 * Watches for all monte carlo start events
 */
export default function* watchForMonteCarlo() {
  while (true) {
    const action = yield take(START_MONTE_CARLO);
    yield fork(
      runMonteCarloSimulation,
      action.iterations,
      action.price,
      action.volatility,
      action.steps,
    );
  }
}

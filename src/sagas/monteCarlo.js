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
function* runSingleIteration(steps, price, dailyVolatility) {
  const lastPrice = yield MonteCarlo.singleIteration(steps, price, dailyVolatility);
  yield put({ type: ADD_ITERATIONS, payload: [lastPrice] });
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
    for (let iteration = 0; iteration < iterations; iteration += 1) {
      yield call(runSingleIteration, steps, price, volatility);
      yield put({ type: PROGRESS_UPDATE, payload: iteration + 1 });
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

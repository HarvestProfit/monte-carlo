import { take, fork, call, put, select } from 'redux-saga/effects';
import analysis from '../utilities/analysis';

import {
  BEGIN_ANALYSIS,
  END_ANALYSIS,
} from '../actions/analysis';

function* runMonteCarloAnalysis() {
  try {
    const iterations = yield select(state => state.iterations);
    const data = yield call(analysis, iterations);
    yield put({ type: END_ANALYSIS, payload: data });
  } catch (error) {
    console.error(error);
  }
}

/**
 * Watches for all monte carlo start events
 */
export default function* watchForAnalysis() {
  while (true) {
    yield take(BEGIN_ANALYSIS);
    yield fork(runMonteCarloAnalysis);
  }
}

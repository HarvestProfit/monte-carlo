import { all, fork } from 'redux-saga/effects';
import watchForMonteCarlo from './monteCarlo';
import watchForAnalysis from './analysis';

export default function* root() {
  yield all([
    fork(watchForMonteCarlo),
    fork(watchForAnalysis),
  ]);
}

import { all, fork } from 'redux-saga/effects';
import watchForMonteCarlo from './monteCarlo';

export default function* root() {
  yield all([
    fork(watchForMonteCarlo),
  ]);
}

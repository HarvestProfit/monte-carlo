import {
  START_MONTE_CARLO,
  END_MONTE_CARLO,
} from '../actions/monteCarlo';

const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_MONTE_CARLO:
      return true;
    case END_MONTE_CARLO:
      return false;
    default:
      return state;
  }
}

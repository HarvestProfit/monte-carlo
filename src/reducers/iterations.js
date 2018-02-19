import {
  ADD_ITERATIONS,
  CLEAR_ITERATIONS,
} from '../actions/iterations';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITERATIONS:
      return [
        ...state,
        ...action.payload,
      ];
    case CLEAR_ITERATIONS:
      return initialState;
    default:
      return state;
  }
}

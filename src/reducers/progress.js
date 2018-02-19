import {
  PROGRESS_UPDATE,
  PROGRESS_CLEAR,
} from '../actions/progress';

const initialState = 0;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PROGRESS_UPDATE:
      return action.payload;
    case PROGRESS_CLEAR:
      return initialState;
    default:
      return state;
  }
}

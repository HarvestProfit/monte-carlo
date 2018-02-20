import {
  SET_START_DATE,
} from '../actions/date';

const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_START_DATE:
      return action.payload;
    default:
      return state;
  }
}

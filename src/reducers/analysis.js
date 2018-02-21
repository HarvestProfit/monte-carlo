import { END_ANALYSIS } from '../actions/analysis';

const initialState = {
  average: {},
  maximum: {},
  minimum: {},
  last: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case END_ANALYSIS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

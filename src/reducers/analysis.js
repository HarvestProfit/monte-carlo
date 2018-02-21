import { END_ANALYSIS } from '../actions/analysis';

const initialState = {
  average: {},
  maximum: {},
  minimums: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case END_ANALYSIS:
      return {
        ...state,
        average: action.average,
        maximum: action.maximum,
        minimum: action.minimum,
      };
    default:
      return state;
  }
}

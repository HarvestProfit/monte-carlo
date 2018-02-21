import {
  BEGIN_ANALYSIS,
  END_ANALYSIS
} from '../actions/analysis';

const initialState = {
  loading: false,
  average: {},
  maximum: {},
  minimum: {},
  last: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case BEGIN_ANALYSIS:
      return {
        ...state,
        loading: true,
      };
    case END_ANALYSIS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    default:
      return state;
  }
}

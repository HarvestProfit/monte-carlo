import { combineReducers } from 'redux';
import iterations from './iterations';
import progress from './progress';

export default combineReducers({
  iterations,
  progress,
});

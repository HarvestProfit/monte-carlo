import { combineReducers } from 'redux';
import iterations from './iterations';
import progress from './progress';
import running from './running';

export default combineReducers({
  iterations,
  progress,
  running,
});

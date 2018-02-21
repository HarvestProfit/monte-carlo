import { combineReducers } from 'redux';
import analysis from './analysis';
import iterations from './iterations';
import progress from './progress';
import running from './running';
import start from './start';

export default combineReducers({
  analysis,
  iterations,
  progress,
  running,
  start,
});

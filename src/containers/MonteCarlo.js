import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setStartDate } from '../actions/date';
import { startMonteCarlo } from '../actions/monteCarlo';
import MonteCarlo from '../components/MonteCarlo';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setStartDate,
    startMonteCarlo,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    iterations: state.iterations,
    progress: state.progress,
    running: state.running,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonteCarlo);

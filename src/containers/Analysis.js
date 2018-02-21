import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Analysis from '../components/Analysis';

import { startAnalysis } from '../actions/analysis';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    startAnalysis,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    analysis: state.analysis,
    start: state.start,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis);

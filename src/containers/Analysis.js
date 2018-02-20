import { connect } from 'react-redux';
import Analysis from '../components/Analysis';

function mapStateToProps(state) {
  return {
    iterations: state.iterations,
    start: state.start,
  };
}

export default connect(mapStateToProps, null)(Analysis);

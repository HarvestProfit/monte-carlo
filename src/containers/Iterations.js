import { connect } from 'react-redux';
import Iterations from '../components/Iterations';

function mapStateToProps(state) {
  return {
    iterations: state.iterations,
    start: state.start,
  };
}

export default connect(mapStateToProps, null)(Iterations);

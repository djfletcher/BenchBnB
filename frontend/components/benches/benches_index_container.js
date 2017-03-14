import { connect } from 'react-redux';
import { fetchBenches, receiveBenches } from '../../actions/bench_actions';
import BenchesIndex from './benches_index';

const mapStateToProps = ({ benches }) => ({
  benches
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  receiveBenches: benches => dispatch(receiveBenches(benches))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchesIndex);

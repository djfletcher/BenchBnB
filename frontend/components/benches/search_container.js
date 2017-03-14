import { connect } from 'react-redux';
import { fetchBenches, receiveBenches } from '../../actions/bench_actions';
import Search from './search';

const mapStateToProps = ({ benches }) => ({
  benches
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  receiveBenches: benches => dispatch(receiveBenches(benches))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

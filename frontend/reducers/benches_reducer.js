import { RECEIVE_BENCHES } from '../actions/bench_actions';
import merge from 'lodash/merge';

const BenchesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {};

  switch(action.type) {
    case RECEIVE_BENCHES:
      action.benches.forEach(bench => {
        newState[bench.id] = bench;
      });
      return newState;
    default:
      return state;
  }
};

export default BenchesReducer;

import React from 'react';
import BenchMap from './bench_map';
import BenchesIndex from './benches_index';

const Search = ({ benches, fetchBenches, receiveBenches }) => (
  <div>
    <BenchMap />
    <BenchesIndex
      benches={benches}
      fetchBenches={fetchBenches}
      receiveBenches={receiveBenches}
    />
  </div>
);

export default Search;

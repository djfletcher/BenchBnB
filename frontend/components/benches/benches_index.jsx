import React from 'react';

const BenchesIndexItem = (bench, index) => <li key={index}>{bench.description}</li>;

class BenchesIndex extends React.Component {
  componentDidMount() {
    const benches = this.props.fetchBenches();
  }

  render() {
    let benches;
    const benchIds = Object.keys(this.props.benches);
    if (benchIds.length !== 0) {
      benches = benchIds.map((benchId, index) => (
        BenchesIndexItem(this.props.benches[benchId], index))
      );
    }

    return(
      <ul>{benches}</ul>
    );
  }
}

export default BenchesIndex;

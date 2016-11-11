import React from 'react';
import Graph from './graph';

export default React.createClass({
  render() {
    return (
      <div className="container">
        <h1>This is the Graphs page.</h1>
        <Graph data={this.props.data} />
      </div>
    );
  }
})

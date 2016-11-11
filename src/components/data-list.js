import React from 'react';
import ObjectList from './object-list';

export default React.createClass({
  render() {
    return (
      <div className="container">
        <h1>This is the Data List page.</h1>
        <ObjectList data={this.props.data} />
      </div>
    );
  }
})

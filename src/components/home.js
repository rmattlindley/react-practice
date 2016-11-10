import React from 'react';

import ObjectList from './object-list';

export default React.createClass({
  render() {
    return (
      <div className="container">
        <h1>Hello.</h1>
        <p>This is where content will go.</p>
        <ObjectList data={this.props.data}/>
      </div>
    );
  }
})

import React, { Component } from 'react';

class ObjectList extends Component {
  render() {

    const { data } = this.props;

    const objectList = data.map(object => {
      return (
        <li key={object.id}>{object.name}</li>
      )
    })

    return (
      <ul>
        {objectList}
      </ul>
    )
  }
}

module.exports = ObjectList;

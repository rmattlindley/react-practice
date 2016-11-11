import React, { Component } from 'react';

class ObjectList extends Component {
  render() {
    const { data } = this.props;

    const objectList = data.map(object => {
      return (
        <li key={object.id} className="list-group-item">
          <h4>{object.name}</h4>
        </li>
      )
    })

    return (
      <ul className="list-group">
        {objectList}
      </ul>
    );
  }
}

module.exports = ObjectList;

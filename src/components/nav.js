import React, { Component } from 'react';

class Navigation extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Project name</a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Add Item</a></li>
          </ul>
          <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Search..." />
          </form>
        </div>
      </nav>
    );
  }
}

module.exports = Navigation;

import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Project name</Link>
          </div>
          <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Search..." />
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/data-list" activeClass={ 'active' }>Data</Link></li>
            <li><Link to="/graphs" activeClass={ 'active' }>Graphs</Link></li>
            <li><Link to="/about" activeClass={ 'active' }>About</Link></li>
            <li><Link to="/contact" activeClass={ 'active' }>Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Navigation;

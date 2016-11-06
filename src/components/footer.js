import React, { Component } from 'react';
import { footer } from 'react-bootstrap';

class Footer extends Component {
  render () {
    var thisYear = new Date().getFullYear();
    return (
      <footer id="footer">
        <div className="container">
          <p className="text-muted">&copy; Copyright {thisYear}</p>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;

import React, { Component } from 'react';
import { footer } from 'react-bootstrap';

var Footer = React.createClass ({
  render: function () {
    var thisYear = new Date().getFullYear();
    return (
      <footer id="footer">
        <div className="container">
          <p className="text-muted">&copy; Copyright {thisYear}</p>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;

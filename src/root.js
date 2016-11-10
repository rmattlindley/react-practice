import React, { Component } from 'react';

import Navigation from './components/nav';
import Footer from './components/footer';

export default class Root extends Component {
  render() {
    return (
      <div className="App">
          <div id="wrap">
            <Navigation />
            {this.props.children}
          </div>
          <Footer />
      </div>
    )
  }
}

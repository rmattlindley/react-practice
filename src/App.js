import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/nav';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div id="wrap">
            <Navigation />
            <div className="container">
              <h1>Hello.</h1>
              <p>This is where content will go.</p>
            </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;

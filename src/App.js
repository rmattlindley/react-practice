import React, { Component } from 'react';
import './App.css';

import Navigation from './components/nav';
import Footer from './components/footer';
import ObjectList from './components/object-list';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div id="wrap">
            <Navigation />
            <div className="container">
              <h1>Hello.</h1>
              <p>This is where content will go.</p>
               <ObjectList data={this.props.data}/>
            </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;

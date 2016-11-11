import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import Root from './root';
import App from './App';
import data from './data/data';

import About from './components/about';
import Contact from './components/contact';
import Graphs from './components/graphs';
import DataList from './components/data-list';

import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//
// This works but it should but is kinda crappy.
// Passing the data when using router is weird.
 //
var DataListWrapper = React.createClass({
  render: function () {
    return (
        <DataList data={data} />
    );
  }
});
var GraphsWrapper = React.createClass({
  render: function () {
    return (
        <Graphs data={data} />
    );
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App} />
        <Route path="/data-list" component={DataListWrapper}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/graphs" component={GraphsWrapper}/>
    </Route>
  </Router>,
  document.getElementById('root'));

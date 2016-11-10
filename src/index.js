import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router';
import Root from './root';
import App from './App';

import About from './components/about';
import Contact from './components/contact';
import Graphs from './components/graphs';
import DataList from './components/data-list';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App} />
        <Route path="/data-list" component={DataList}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/graphs" component={Graphs}/>
    </Route>
  </Router>, document.getElementById('root'))

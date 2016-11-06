import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './data/data';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);

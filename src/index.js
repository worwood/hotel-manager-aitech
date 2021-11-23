import React from 'react';
import ReactDOM from 'react-dom';
import { HotelesApp } from './HotelesApp';
import './index.scss'
import 'bootstrap/scss/bootstrap.scss'
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <HotelesApp />
  </HashRouter>,

  document.getElementById('root')
);


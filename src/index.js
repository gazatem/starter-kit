///////////////////////////////////////////
// jquery and tether for bootstrap to use
// alternative is to link them in index.html
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import jquery from 'jquery';
window.$ = window.jQuery=jquery;
window.Tether=require('tether');
require('bootstrap/dist/js/bootstrap');
/////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';


import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import configureStore from './store/configureStore';
import routes from './routes';

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configureStore();

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

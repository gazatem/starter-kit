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
import { createStore, applyMiddleware } from 'redux';

import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
import promise from 'redux-promise';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';


const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(promise, thunk, logger)(createStore);

/*import configureStore from './store/configureStore';*/
import routes from './routes';

const history = useRouterHistory(createHashHistory)({ queryKey: false });
/*const store = configureStore();*/

import './index.css';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

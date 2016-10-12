import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import HomePage from './containers/HomePage';
import MoviesPage from './containers/MoviesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/movies" component={MoviesPage} />
  </Route>
);

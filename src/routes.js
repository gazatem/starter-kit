import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/movies" component={MoviesPage} />
  </Route>
);

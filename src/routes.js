import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import HomePage from './containers/HomePage';
import GenrePage from './containers/GenrePage';
import MoviesPage from './containers/MoviesPage';
import MoviePage from './containers/MoviePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/movies" component={MoviesPage} />
    <Route path="/genre(/:genre_id)" component={GenrePage} />
    <Route path="/movie(/:movie_id)" component={MoviePage} />
  </Route>
);

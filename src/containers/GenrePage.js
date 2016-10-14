import React, { Component } from 'react';
import GenresMenu from '../components/menu/GenresMenu';
import GenreMovies from '../components/list/GenreMovies';

export default class GenrePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <GenresMenu/>
                </div>
                <div className="col-md-9">
                    <GenreMovies/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

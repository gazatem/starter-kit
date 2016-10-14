import React, { Component } from 'react';
import GenresMenu from '../components/menu/GenresMenu';
import LatestMovies from '../components/list/LatestMovies';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <GenresMenu/>
                </div>
                <div className="col-md-9">
                    <LatestMovies/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

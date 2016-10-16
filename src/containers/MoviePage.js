import React, { Component } from 'react';
import SingleMovie from '../components/movie/SingleMovie';

export default class MoviePage extends Component {
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <SingleMovie movie_id={this.props.params.movie_id}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

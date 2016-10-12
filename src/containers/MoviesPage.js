import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenreMovies } from '../actions/genre';

class MoviesPage extends Component {
 
  componentWillMount() {
      this.props.getGenreMovies();
  }

  render() {
    return (
      <div>
        <div className="container">
            <h3>Hello Movies!</h3>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return { genre: state.genre.movies };
 }

export default connect(mapStateToProps, { getGenreMovies })(MoviesPage);

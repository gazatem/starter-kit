import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenreMovies } from '../actions/genre';


class MoviesPage extends Component {

    componentWillMount(){
        this.props.dispatch(getGenreMovies());
    }

    listMovies() {
        return(
                    this.props.movies.map((movie, index) => {
                        return (
                            <div key={index}>{movie.title}</div>
                         );
                    })
            )
    }

    render() {
    /*
        const current_page = this.props.meta["pagination"];
        const per_page = 10;
        const pages = Math.ceil(this.props.users.length / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;
    */
        if(!this.props.movies){
           return "Loading ..."
        }
        return (
          <div>
            <div className="container">
                <h3>Hello Movies!</h3>
                {this.listMovies()}

                if (this.props.movies.length) {
                    <div> pagination</div>
                }
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { data, meta } = state.genre.movies;
    return { movies: data, meta: meta };
 }

export default connect(mapStateToProps)(MoviesPage);

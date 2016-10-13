import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenreMovies } from '../actions/genre';
import { Pagination } from 'react-bootstrap';


class MoviesPage extends Component {

    componentWillMount(){
        this.props.dispatch(getGenreMovies());
    }

    listMovies() {
         if(!this.props.movies){
           return <div>Loading ...</div>
        }

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
           return <div>Loading ...</div>
        }
        const pagination = this.props.meta["pagination"];
        const current_page = pagination.current_page;
        const pages = pagination.total_pages;

        console.log("Current Page", current_page);

        return (
          <div>
            <div className="container">
                <h3>Hello Movies!</h3>
                {this.listMovies()}

<Pagination bsClass="pagination" className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next prev
                        boundaryLinks items={pages} activePage={current_page} />
               
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

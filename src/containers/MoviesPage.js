import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenreMovies } from '../actions/genre';
import { Pagination } from 'react-bootstrap';
import MovieBox from '../components/list/MovieBox';

class MoviesPage extends Component {
   constructor(props)
    {
        super(props);
        this.changePage = this.changePage.bind(this);
    }

    changePage(page)
    {
        console.log("Page", page);
        this.props.dispatch(getGenreMovies(1, page));
    }

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
                    <div key={index} className="col-xs-3">
                        <MovieBox  movie={movie} />
                    </div>
                );
            })
        )
    }

    render() {

        if(!this.props.movies){
           return <div>Loading ...</div>
        }

        const pagination = this.props.meta["pagination"];
        const current_page = pagination.current_page;
        const pages = pagination.total_pages;

        return (
          <div>
            <div className="container">

                <h3>All Movies!</h3>
                <div className="row">
                    {this.listMovies()}
                </div>

                <Pagination className="pagination" bsSize="medium" maxButtons={10} first last next prev boundaryLinks
                items={pages}
                activePage={current_page}
                onSelect={this.changePage}/>

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

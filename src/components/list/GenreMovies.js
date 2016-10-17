import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenreMovies, getGenre } from '../../actions/genre';
import { Pagination } from 'react-bootstrap';
import MovieBox from './MovieBox';

class GenreMovies extends Component {

    constructor(props)
    {
        super(props);
        this.changePage = this.changePage.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    changePage(page = 1)
    {
        this.loadData(this.genre, page);
    }

    loadData(gender_id = 1, page = 1)
    {
        this.genre = gender_id;
        this.props.dispatch(getGenre(gender_id));
        this.props.dispatch(getGenreMovies(gender_id, page));
    }

    componentWillMount() {
        this.loadData(this.props.genre_id);
    }

    componentWillReceiveProps(nextProps){
        if (JSON.stringify(this.props.genre_id) !== JSON.stringify(nextProps.genre_id)){
            console.log("Genre Changed");
            this.loadData(nextProps.genre_id);
        }
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
        if(!this.props.genre){
           return <div>Loading ...</div>
        }


        const pagination = this.props.meta["pagination"];
        const current_page = pagination.current_page;
        const pages = pagination.total_pages;

        return (
          <div>
                <div className="row">
                    <h3>{this.props.genre.name}</h3>
                    {this.listMovies()}
                </div>

                <Pagination className="pagination" bsSize="medium" maxButtons={12} first last next prev boundaryLinks
                items={pages}
                activePage={current_page}
                onSelect={this.changePage}/>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const { data, meta } = state.genre.movies;
    return { movies: data, meta: meta, genre: state.genre.info.data };
}

export default connect(mapStateToProps)(GenreMovies);
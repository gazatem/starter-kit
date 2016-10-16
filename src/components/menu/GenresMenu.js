import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenresMenu } from '../../actions/genre';
import { Link } from 'react-router';

class GenresMenu extends Component {

    componentWillMount(){
        this.props.dispatch(getGenresMenu());
    }


    listGenres() {
        if(!this.props.genres){
           return "Loading ..."
        }
        return this.props.genres.map((genre) => {
            return (
                <li className="list-group-item" key={genre.id}>
                    <Link to={`/genre/${genre.id}` }><strong>{genre.name}</strong></Link>
                </li>
            );
        });
    }

    render() {
        return(
            <div><ul className="list-group">{this.listGenres()}</ul></div>
        );
    }
}

function mapStateToProps(state) {
    const { data } = state.genre.genres;
    return { genres: data};
}

export default connect(mapStateToProps)(GenresMenu);
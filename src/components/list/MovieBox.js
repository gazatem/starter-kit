import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';

import './movie.css';

const MovieBox = (props) => {

    const img_url = `http://backoffice.sinemateknik.com/images/movies/${props.movie.id}${props.movie.image}`;
    return (<div>
            <div className="row box">
                <div className="col-xs-12">
                    <div className="movie">
                        <Link to={`/movie/${props.movie.id}` }><Image src={img_url} responsive /></Link>
                    </div>
            </div>
                <div className="col-xs-12 movie">
                <Link to={`/movie/${props.movie.id}` }>{props.movie.title}</Link>
                </div>
            </div>
        </div>);
}

export default MovieBox;

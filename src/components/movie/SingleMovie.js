import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleMovie } from '../../actions/movie';
import { Row, Col, Image } from 'react-bootstrap';
import Helmet from 'react-helmet';

class SingleMovie extends Component {

    componentWillMount(){
        this.props.dispatch(getSingleMovie(this.props.movie_id));
    }

    render() {
        const { movie } = this.props;
        if(!movie){
            return <div>Loading</div>
        }
        const img_url = `http://backoffice.sinemateknik.com/images/movies/${movie.id}${movie.image}`;
        return(
            <div>
                <Helmet
                    title={movie.title}
                    meta={[
                        {property: 'og:title', content: movie.title},
                    ]} />

                <Row>
                    <Col xs={2} md={2}>
                        <Image src={img_url} responsive className="responsive-image" />
                    </Col>
                    <Col xs={10} md={10}>
                        <h3>{movie.title}</h3>
                        <h4>{movie.original_title}</h4>
                        <p>{movie.overview}</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("Movie", state.movie.movie );
    return { movie: state.movie.movie.data };
}

export default connect(mapStateToProps)(SingleMovie);
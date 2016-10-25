import axios from 'axios';
import * as constants from '../constants';

export function getSingleMovie(movie_id = 0){
    const request = axios.get(`${constants.API_URL}movies/${movie_id}`);
    return {
      type: constants.SINGLE_MOVIE,
      payload: request
    }
}

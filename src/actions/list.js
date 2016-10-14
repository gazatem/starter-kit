import axios from 'axios';
import * as constants from '../constants';

export function getLatestMovies(){
    const request = axios.get(`http://api.sinemateknik.com/v1/movies`);
    return {
      type: constants.LATEST_MOVIES,
      payload: request
    }
}

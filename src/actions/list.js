import axios from 'axios';
import * as constants from '../constants';

export function getLatestMovies(){
    const request = axios.get(`${constants.API_URL}movies`);
    return {
      type: constants.LATEST_MOVIES,
      payload: request
    }
}

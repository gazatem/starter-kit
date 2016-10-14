import axios from 'axios';
import * as constants from '../constants';

export function getGenresMenu(){
    const request = axios.get(`http://api.sinemateknik.com/v1/genres`);
    return {
      type: constants.GENRES_MENU,
      payload: request
    }
}

export function getGenreMovies(genre_id = 1, page=1){
    const request = axios.get(`http://api.sinemateknik.com/v1/genres/${genre_id}/movies?page=${page}`);
    return {
      type: constants.GENRE_MOVIES,
      payload: request
    }
}

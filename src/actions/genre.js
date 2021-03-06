import axios from 'axios';
import * as constants from '../constants';

export function getGenresMenu(){
    const request = axios.get(`${constants.API_URL}genres`);
    return {
      type: constants.GENRES_MENU,
      payload: request
    }
}

export function getGenreMovies(genre_id = 1, page=1){
    const request = axios.get(`${constants.api_url}genres/${genre_id}/movies?page=${page}`);
    return {
      type: constants.GENRE_MOVIES,
      payload: request
    }
}

export function getGenre(genre_id = 1){
    const request = axios.get(`${constants.API_URL}genres/${genre_id}`);
    return {
      type: constants.GENRE,
      payload: request
    }
}

import axios from 'axios';

export const GENRE_MOVIES = 'GENRE_MOVIES';

export function getGenreMovies(genre_id = 1, page=1){
    const request = axios.get(`http://api.sinemateknik.com/v1/genres/${genre_id}/movies?page=${page}`);
    return {
      type: GENRE_MOVIES,
      payload: request
    }
}

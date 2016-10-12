import { GENRE_MOVIES } from '../actions/genre';

const INITIAL_STATE = { movies: [] };

export default function(state = INITIAL_STATE, action){

    console.log("Movies", action.type);

    switch (action.type) {
        
        case GENRE_MOVIES:
            return {...state, movies: action.payload.data };
            break;
        
        default:
          return state;
    }
}

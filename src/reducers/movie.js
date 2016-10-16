import * as constants from '../constants';

const INITIAL_STATE = { movie: [] };

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case constants.SINGLE_MOVIE:
            return {...state, movie: action.payload.data };
        default:
          return state;
    }
}
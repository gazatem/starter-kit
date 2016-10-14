import * as constants from '../constants';

const INITIAL_STATE = { latest: [] };

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case constants.LATEST_MOVIES:
            return {...state, movies: action.payload.data };
        default:
          return state;
    }
}
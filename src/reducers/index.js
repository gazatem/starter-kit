import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import genre from './genre';
import reducer_list from './reducer_list';
import movie from './movie';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    routing: routerReducer,
    genre,
    listing: reducer_list,
    movie
});

export default rootReducer;

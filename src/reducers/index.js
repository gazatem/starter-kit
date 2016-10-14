import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import genre from './genre';
import reducer_list from './reducer_list';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    routing: routerReducer,
    genre,
    listing: reducer_list
});

export default rootReducer;

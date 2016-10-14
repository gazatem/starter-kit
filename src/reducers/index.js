import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import genre from './genre';
import list from './list';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    routing: routerReducer,
    genre,
    list
});

export default rootReducer;

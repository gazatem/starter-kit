import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import genre from './genre';

const rootReducer = combineReducers({
    state: (state = {}) => state,
    routing: routerReducer,
    genre
});

export default rootReducer;

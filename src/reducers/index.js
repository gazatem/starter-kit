import { combineReducers } from 'redux';
import genre from './genre';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  genre: genre
});

export default rootReducer;

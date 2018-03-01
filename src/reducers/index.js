import { combineReducers } from 'redux';
import scrapeReducer from './scrapeReducer';

const rootReducer = combineReducers({
  scrapeReducer,
});

export default rootReducer;

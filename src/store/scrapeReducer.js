import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const {
  GET_SCRAPED_DATA_SUCCESSFUL,
  GET_SCRAPED_DATA_FAILED
} = actionTypes;


/**
 *
 * @param {*} state
 * @param {*} action
 * @return {state} object
 */
export default function scrapeReducer(state = initialState.scrape, action) {
  switch (action.type) {
    case GET_SCRAPED_DATA_SUCCESSFUL:
      return {
        ...state,
        data: action.payload,
        successFlag: true
      };
    case GET_SCRAPED_DATA_FAILED:
      return { ...state,
        error: action.error,
        successFlag: false
      };
    default:
      return state;
  }
}

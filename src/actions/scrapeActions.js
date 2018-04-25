import axios from 'axios';
import actionTypes from '../actions/actionTypes';

const {
  GET_SCRAPED_DATA_SUCCESSFUL,
  GET_SCRAPED_DATA_FAILED
} = actionTypes;

const scrapeWeb = (args) => {
  return async (dispatch) => {
    await axios({
      data: args,
      method: 'POST',
      url: `${process.env.GETURL}/simple-web-scraper/scraping/`,
    })
      .then((response) => {
        if (response) {
          dispatch({
            type: GET_SCRAPED_DATA_SUCCESSFUL,
            payload: response.data
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: GET_SCRAPED_DATA_FAILED,
          error,
        });
      });
  };
};

export default scrapeWeb;

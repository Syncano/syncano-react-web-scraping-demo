import axios from 'axios';
import actionTypes from '../actions/actionTypes';

const {
  GET_SCRAPED_DATA_SUCCESSFUL,
  GET_SCRAPED_DATA_FAILED
} = actionTypes;

const appendArgs = (url, data) => {
  return `${url}?${JSON.stringify(data)
    .replace(/":"/g, '=')
    .replace(/,/g, '&')
    .replace(/{|}|"/g, '')}`;
};

const scrapeWeb = (args) => {
  return (dispatch) => {
    return axios({
      data: args,
      method: 'GET',
      url: appendArgs(`${process.env.GETURL}/simple-web-scraper/scraping/`, args),
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

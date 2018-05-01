import SyncanoClient from '@syncano/client';
import actionTypes from '../actions/actionTypes';

const s = new SyncanoClient(process.env.SYNCANO_INSTANCE);

const {
  GET_SCRAPED_DATA_SUCCESSFUL,
  GET_SCRAPED_DATA_FAILED
} = actionTypes;

const scrapeWeb = args => (dispatch) => {
  s.get('simple-web-scraper/scraping', args)
    .then(({ message, data }) => {
      dispatch({
        type: GET_SCRAPED_DATA_SUCCESSFUL,
        payload: { message, data }
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_SCRAPED_DATA_FAILED,
        error,
      });
    });
};

export default scrapeWeb;

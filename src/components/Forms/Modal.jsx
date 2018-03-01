import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ScrapeForm from './ScrapeForm';
import Navbar from '../common/navbar';
import scrapeWeb from '../../actions/scrapeActions';

/**
 * Modal component
 * @class Modal
 * @extends {React.Component}
 * @render {render()}
 */
class Modal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    scrapeState: PropTypes.object.isRequired,
    scrapeWeb: PropTypes.func.isRequired,
  }

  static defaultProps = { isOpen: false }
  state = {
    isOpen: this.props.isOpen
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }


  /**
   * Renders component
   * @return {XML} JSX
   */
  render() {
    const scrapedData = this.props.scrapeState.data;
    return (
        <div id="container" className={`modal-sheet-container ${!this.props.isOpen ? 'modal-sheet-hidden' : ''}`}>
        <div className="row modal-sheet-overlay">
            <div id="modal1" className="modal modal-sheet">
              <Navbar />
              <div className="container round-container">
                <h5>Instructions</h5>
                <p>This socket enables you to extract data from webpages.
                  Before you start scraping.</p>
                <ol>
                <li>
                  Select content on a webpage (<i>example: https://www.reddit.com</i>) of your choice using
                  <ul>css-selectors (<i>example: a.title</i>) or</ul>
                  <ul>xpath (<i>example: //*[@id='content_box']/article/header/h2/a/text()</i>)</ul>
                </li>
                <li>Make sure to identify your selector (<i>e.g. title</i>) and</li>
                <li>choose data extraction format </li>
                </ol>
              </div>
              <div className="modal-content grey lighten-4">
                <div className="row">
                  <ScrapeForm scrapeWeb={this.props.scrapeWeb} />
                </div>

                <div className="card grey darken-1">
                  <div className="card-content white-text">
                    {scrapedData.data ? JSON.stringify(scrapedData.data) : ''}
                    {scrapedData.error ? JSON.stringify(scrapedData.data) : ''}
                    </div>
                </div>

              </div>
            </div>
            </div>
            </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    scrapeState: state.scrapeReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  scrapeWeb: scrapeDetails => dispatch(scrapeWeb(scrapeDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

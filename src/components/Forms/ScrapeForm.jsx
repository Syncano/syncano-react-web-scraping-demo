import React from 'react';
import PropTypes from 'prop-types';

/**
 * @class ScrapeForm
 * @extends {React.Component}
 * @render {render()}
 */
class ScrapeForm extends React.Component {
  static propTypes = {
    scrapeWeb: PropTypes.func
  }
  state = {
    url: '',
    identifier: '',
    selector: '',
    selectorType: 'css',
    extractorType: 'json',
  };

  /**
   * @param {*} event
   * @returns {function} - setState
   */
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit = () => {
    const configValue = {};
    configValue[this.state.identifier] = this.state.selector;

    const scrapeData = {
      url: this.state.url,
      selectorType: this.state.selectorType,
      config: { [this.state.identifier]: this.state.selector },
      extract: this.state.extractorType
    };
    this.props.scrapeWeb(scrapeData);
  }

  /**
   * Renders component
   * @return {XML} JSX
   */
  render() {
    return (
      <form className="col s12" >

      <div className="row">
        <div className="input-field col s12">
        <input
          type="text"
          className="form-control"
          placeholder="Example: https://www.reddit.com"
          name="url"
          onChange={this.onChange}
        />
        <label>URL</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s3" id="input-box">
          <input
            id="input_box"
            type="text"
            className="form-control"
            placeholder="Example: title"
            name="identifier"
            value={this.state.identifier}
            onChange={this.onChange}
          />
          <label>Identifier</label>
        </div>

        <div className="input-field col s4" id="input-box">
          <input
            id="input_box"
            type="text"
            className="form-control"
            placeholder="Example: a.title"
            name="selector"
            value={this.state.selector}
            onChange={this.onChange}
          />
          <label>Selector</label>
        </div>

        <div className="switch col s3">
          <label>
            css-selector
            <input
              type="checkbox"
              name="selectorType"
              value={this.state.selectorType === 'css' ? 'xpath' : 'css'}
              onChange={this.onChange}
            />
            <span className="lever"></span>
            xpath-selector
          </label>
        </div>

        <div className="switch col s2">
          <label>
            JSON
            <input
              type="checkbox"
              name="extractorType"
              value={this.state.extractorType === 'json' ? 'xml' : 'json'}
              onChange={this.onChange}
            />
            <span className="lever"></span>
            XML
          </label>
        </div>
      </div>

      <button className="btn waves-effect waves-light light-blue darken-2 right" type="button" name="action" onClick={this.onSubmit}>Scrape it
      </button>

    </form>
    );
  }
}

export default ScrapeForm;

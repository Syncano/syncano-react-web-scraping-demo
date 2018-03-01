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
    selectorType: '',
    extractorType: '',
  };

  /**
   * @param {*} event
   * @returns {function} - setState
   */
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
 *
 * @param {*} name - for dropDown name
 * @param {*} value - for dropDown value
 * @returns {function} - setState
 */
  onSelect = (name, value) => {
    this.setState({ [name]: value });
  }

  onSubmit = () => {
    const configValue = {};
    configValue[this.state.identifier] = this.state.selector;

    const scrapeData = {
      url: this.state.url,
      selectorType: this.state.selectorType,
      [this.state.identifier]: this.state.selector,
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

        <div className="input-field col s3">
          <ul id = "selector-dropdown" className = "dropdown-content">
            <li onClick={() => this.onSelect('selectorType', 'css')}>css-selector</li>
            <li className = "divider"></li>
            <li onClick={() => this.onSelect('selectorType', 'xpath')}>xpath-selector</li>
          </ul>
          <a className = "input-field dropdown-button" data-activates = "selector-dropdown">
            {!this.state.selectorType.length ? 'choose selector-type' : this.state.selectorType}
            <i className = "fa fa-caret-down right"></i></a><br />
        </div>

        <div className="input-field col s2">
          <ul id = "extract-dropdown" className = "dropdown-content">
            <li onClick={() => this.onSelect('extractorType', 'json')}>JSON</li>
            <li className = "divider"></li>
            <li onClick={() => this.onSelect('extractorType', 'xml')}>XML</li>
          </ul>
          <a className = "input-field dropdown-button" data-activates = "extract-dropdown">
             {!this.state.extractorType.length ? 'extract option' : this.state.extractorType}
            <i className = "fa fa-caret-down right"></i></a>
        </div>

      </div>

      <button className="btn waves-effect waves-light light-blue darken-2 right" type="button" name="action" onClick={this.onSubmit}>Scrape it
      </button>

    </form>
    );
  }
}

export default ScrapeForm;

import React from 'react';
import Modal from './Forms/Modal';
import logo from '../images/syncano_logo.png';

class Home extends React.Component { // eslint-disable-line
  state = {
    showModal: false
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() { // eslint-disable-line
    return (
      <div>
          <div className="page-wrap">
      <header>
      <div className='Header-logo'>
                <div className='Header-logoWrap'>
                <div className='Header-logoBevel' />
                <div className='Header-logoBorder ' />

                <img
                  className='Header-logoImage'
                  src={logo}
                  alt='Logo'
                />
              </div>
              </div>
        <h1> Want to do a simple scraping?</h1>
        <a className="head-link" onClick={this.toggleModal}> Scrape here!</a>
      </header>
      </div>
      <Modal isOpen={this.state.isOpen}/>
      </div>

    );
  }
}


export default Home;

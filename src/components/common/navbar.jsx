import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<nav>
    <div className="nav-wrapper light-blue darken-2">
      <a href="https://github.com/Syncano/syncano-socket-simple-web-scraping" className="brand-logo right"><i className='fa fa-github'></i></a>
      {/* <img
            src='https://pbs.twimg.com/profile_images/692354435738161152/UAkVM9-p.png'
            alt='Logo'
          /> */}
      {/* <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to ="/">Home</Link></li>
      </ul> */}
    </div>
  </nav>
  );
};

export default Navbar;


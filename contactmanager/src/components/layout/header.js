import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="#" className="navbar-brand">{branding}</a>

        <ul className="navbar-nav text-right">
          <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i>
                Home
              </Link>
              <Link to="/contact/AddContact" className="nav-link">
                <i className="fas fa-AddContact"></i>
                Add
              </Link>
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i>
                About
              </Link>
          </li>
          <li></li>
        </ul>

      </div>
    </nav>
  );
}

/*--when props are not passed this is the defualt props will get displayed---*/
Header.defaultProps = {
  branding : 'My App'
}

/*----validating the props-------*/
Header.propTypes={
    branding : PropTypes.string.isRequired
}

// const headerStyle= {
//   color : 'green',
//   fontSize : '50px'
// }

export default Header;

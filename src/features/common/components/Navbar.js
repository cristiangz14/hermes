import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated, login, logout, profile } = this.props;
    return (
      <div>
        {
          !isAuthenticated && (
            <button type="button"
              className="btn btn-primary"
              onClick={login}>
              Log In
            </button>
            )
        }
        {
          isAuthenticated && (
            <button type="button"
              className="btn btn-primary"
              onClick={logout}>
              Log Out
            </button>
            )
        }
      </div>
    )
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  profile: PropTypes.object
};

export default Navbar;

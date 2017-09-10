import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, logout } from '../../auth/actions';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends Component {
  render() {
    const { isAuthenticated, login, logout, profile } = this.props; // eslint-disable-line no-shadow
    return (
      <div className="app">
        <Header isAuthenticated={isAuthenticated}
          login={login}
          logout={logout}
          profile={profile}/>
        {
          !isAuthenticated && (
            <p className="text-center">You are not logged in. Please log in.</p>
          )
        }
        {
          isAuthenticated &&
                <Main/>
        }
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  profile: PropTypes.object,
};

const mapStateToProps = ({ auth: { isAuthenticated, profile } }) => ({
  isAuthenticated,
  profile,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

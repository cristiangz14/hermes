import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../auth/actions';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends Component {
    render() {
      const { isAuthenticated, login, logout, profile } = this.props;
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
              isAuthenticated && (
                  <Main/>
                )
            }
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    profile: state.auth.profile
  }
}

const mapDispatchToProps = {
  login,
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

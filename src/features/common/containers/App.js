import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../auth/actions';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends Component {
    render() {
      const { isAuthenticated, login } = this.props;
      return (
        <div className="app">
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
              <div>
                <Header/>
                <Main/>
                <Footer/>
              </div>
              )
          }
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

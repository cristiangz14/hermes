import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Header extends Component {
    render() {
      const { isAuthenticated, login, logout, profile } = this.props;
      return (
        <header className="page-header">
          <Navbar isAuthenticated={isAuthenticated} login={login} logout={logout} profile={profile}/>
        </header>
      );
    }
}

export default Header;

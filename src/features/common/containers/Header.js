import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <Navbar {...this.props}/>
      </header>
    );
  }
}

export default Header;

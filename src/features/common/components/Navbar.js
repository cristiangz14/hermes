import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../components/Button';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfileOpend: false,
    };

    this.toggleProfile = this.toggleProfile.bind(this);
  }

  toggleProfile() {
    const { isProfileOpend } = this.state;
    this.setState({ isProfileOpend: !isProfileOpend });
  }

  render() {
    const { isAuthenticated, login, logout, profile } = this.props;
    const { isProfileOpend } = this.state;
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span>
              <span className="icon-bar"></span><span className="icon-bar"></span>
            </button>
            <h1 className="navbar-brand">
              <a href="/">
                <span>Auth0</span>
              </a>
            </h1>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="li-docs no-basic"><a href="/support">Help &amp; Support</a>
              </li>
              {!isAuthenticated &&
              <li className="li-docs no-basic">
                <Button text="Long In" type="success" handleClick={login}/>
              </li>
              }
              {isAuthenticated &&
              <li className={classNames({ dropdown: true, open: isProfileOpend })}
                onClick={this.toggleProfile}><span className="btn-dro" role="button" data-toggle="dropdown">
                  <span><img src={profile.picture} className="picture avatar ac-avatar"/>
                  </span> {profile.name}<i className="icon-budicon-460"></i></span>
                <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
                  <li><a href="#!" onClick={logout}>Log out</a>
                  </li>
                </ul>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  profile: PropTypes.object,
};

export default Navbar;

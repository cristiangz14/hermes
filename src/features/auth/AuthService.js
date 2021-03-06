import auth0 from 'auth0-js';
import history from '../../history';
import AUTH_CONFIG from './auth0-variables';

const noop = () => {};

export default class AuthService {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: AUTH_CONFIG.domain,
      clientID: AUTH_CONFIG.clientId,
      redirectUri: AUTH_CONFIG.callbackUrl,
      audience: AUTH_CONFIG.audience,
      responseType: 'token id_token',
      scope: 'openid profile email create:tickets',
    });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication(onSuccess = noop, onFailure = noop) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.auth0.client.userInfo(authResult.accessToken, (error, profile) => {
          if (!error) {
            this.setSession({ ...authResult, profile });
            onSuccess(authResult.idToken, profile);
            history.replace('/');
          } else {
            onFailure();
            history.replace('/');
          }
        });
      } else if (err) {
        onFailure();
        history.replace('/');
      }
    });
  }

  getIdToken() {
    return localStorage.getItem('id_token'); // eslint-disable-line
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token'); // eslint-disable-line
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile() {
    let profile = localStorage.getItem('profile'); // eslint-disable-line
    if (!profile) {
      return null;
    }

    return JSON.parse(profile);
  }

  setSession({ expiresIn, accessToken, idToken, profile }) {
    // Set the time that the access token will expire at
    /* eslint-disable no-undef */
    const expiresAt = JSON.stringify((expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('id_token', idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('profile', JSON.stringify(profile));
    /* eslint-disable no-undef */
    // navigate to the home route
    history.replace('/');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return !!this.getIdToken() && (new Date().getTime() < expiresAt);
  }
}

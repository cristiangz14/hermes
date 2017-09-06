import AuthService from './AuthService';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function onLoginSuccess(token) {
    return {
      type: LOGIN_SUCCESS,
      token
    };
}

export function onLoginFailure() {
    return {
      type: LOGIN_SUCCESS
    };
}

export function login() {
  const authService = new AuthService();
  authService.login();
}

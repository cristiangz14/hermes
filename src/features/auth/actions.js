import AuthService from './AuthService';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const authService = new AuthService();

export function loginSuccess(token, profile) {
    return {
      type: LOGIN_SUCCESS,
      token,
      profile
    };
}

export function loginFailure() {
    return {
      type: LOGIN_FAILURE
    };
}

export function logoutSuccess() {
    return {
      type: LOGOUT_SUCCESS
    };
}

export function logoutFailure() {
    return {
      type: LOGOUT_SUCCESS
    };
}

export function login() {
  authService.login();
}

export function logout() {
  return function(dispatch) {
    authService.logout();
    dispatch(logoutSuccess());
  }
}

import AuthService from './AuthService';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../../redux/actionTypes';

const authService = new AuthService();

export const loginSuccess = (token, profile) => ({
  type: LOGIN_SUCCESS,
  token,
  profile,
});

export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });

export const logoutFailure = () => ({ type: LOGOUT_SUCCESS });

export const login = () => {
  authService.login();
};

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch(logoutSuccess());
};

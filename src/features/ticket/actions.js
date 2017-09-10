import axios from 'axios';
import { reset } from 'redux-form';
import AuthService from '../auth/AuthService';

import {
  SUBMIT_TICKET_REQUEST,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAILURE,
} from '../../redux/actionTypes';

const authService = new AuthService();

export const submitting = () => ({ type: SUBMIT_TICKET_REQUEST });

export const submitSuccess = message => ({
  type: SUBMIT_TICKET_SUCCESS,
  message,
});

export const submitFailure = message => ({
  type: SUBMIT_TICKET_FAILURE,
  message,
});

export const resetForm = () => (dispatch) => {
  dispatch(reset('ticket'));
};

export const submitTicket = ticket => (dispatch) => {
  dispatch(submitting());
  axios
    .post('/api/tickets', ticket, {
      headers: { Authorization: `Bearer ${authService.getAccessToken()}` },
    })
    .then((response) => {
      dispatch(submitSuccess(response.data.message));
      resetForm()(dispatch);
    })
    .catch((err) => {
      let message = 'An error has ocurred';
      if (err && err.response && err.response.data && err.response.data.message) {
        message = err.response.data.message;
      }
      dispatch(submitFailure(message));
    });
};

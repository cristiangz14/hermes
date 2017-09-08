import axios from 'axios';
import { reset } from 'redux-form';
import AuthService from '../auth/AuthService';

export const SUBMIT_TICKET_REQUEST = 'SUBMIT_TICKET_REQUEST';
export const SUBMIT_TICKET_SUCCESS = 'SUBMIT_TICKET_SUCCESS';
export const SUBMIT_TICKET_FAILURE = 'SUBMIT_TICKET_FAILURE';

const authService = new AuthService();

export function submitting() {
  return {
    type: SUBMIT_TICKET_REQUEST
  }
}

export function submitSuccess(message) {
  return {
    type: SUBMIT_TICKET_SUCCESS,
    message
  }
}

export function submitFailure(message) {
  return {
    type: SUBMIT_TICKET_FAILURE,
    message
  }
}

export function resetForm() {
  return function(dispatch) {
    dispatch(reset('ticket'));
  }
}

export function submitTicket(ticket) {
  return function(dispatch) {
    dispatch(submitting());
    axios.post('/api/tickets', ticket, {
      headers: {'Authorization' : `Bearer ${authService.getAccessToken()}`}
    })
    .then(function(response) {
      dispatch(submitSuccess(response.data.message));
      resetForm()(dispatch);
    })
    .catch(function(err){
      let message = 'An error has ocurred';
      if(err && err.response && err.response.data && err.response.data.message) {
        message = err.response.data.message;
      }
      dispatch(submitFailure(message));
    })
  }
}

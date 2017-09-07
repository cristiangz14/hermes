import axios from 'axios';
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

export function submitSuccess() {
  return {
    type: SUBMIT_TICKET_SUCCESS
  }
}

export function submitFailure() {
  return {
    type: SUBMIT_TICKET_FAILURE
  }
}

export function submitTicket(ticket) {
  return function(dispatch) {
    dispatch(submitting());
    axios.post('/api/tickets', ticket, {
      headers: {'Authorization' : `Bearer ${authService.getAccessToken()}`}
    })
    .then(function(response) {
        dispatch(submitSuccess());
    })
    .catch(function(err){
      dispatch(submitFailure());
    })
  }
}

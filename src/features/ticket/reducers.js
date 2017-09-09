import {
  SUBMIT_TICKET_REQUEST,
  SUBMIT_TICKET_SUCCESS,
  SUBMIT_TICKET_FAILURE,
} from './actions';

const initialState = {
  isSubmitting: false,
  submitFailed: false,
  submitSuccess: false,
};

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_TICKET_REQUEST:
      return {
        ...state,
        isSubmitting: true,
        submitFailed: false,
        submitSuccess: false,
        message: '',
      };
    case SUBMIT_TICKET_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        submitFailed: false,
        submitSuccess: true,
        message: action.message,
      };
    case SUBMIT_TICKET_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        submitFailed: true,
        submitSuccess: false,
        message: action.message,
      };
    default:
      return state;
  }
}

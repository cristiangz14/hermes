import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ticketReducers from '../features/ticket/reducers';
import authReducers from '../features/auth/reducers';

export default combineReducers({
  ticket: ticketReducers,
  form: formReducer,
  auth: authReducers,
});

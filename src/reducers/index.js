import { combineReducers } from 'redux';
import ticketReducers from '../features/ticket/reducers';
import authReducers from '../features/auth/reducers';
import customerReducers from '../features/customer/reducers';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  ticket: ticketReducers,
  form: formReducer,
  customers: customerReducers,
  auth: authReducers
});

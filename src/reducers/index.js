import { combineReducers } from 'redux';
import ticketReducers from '../features/ticket/reducers';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  ticket: ticketReducers,
  form: formReducer
});

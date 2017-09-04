import { combineReducers } from 'redux';
import ticketReducers from '../features/ticket/reducers';
import { reducer as formReducer } from 'redux-form';

const fakeCustomerReducers = function(state = {}, action) {
  return state;
}

export default combineReducers({
  ticket: ticketReducers,
  form: formReducer,
  customers: fakeCustomerReducers
});

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const preloadedState = {
  customers: [
    {
      name: 'Jon Doe',
      email: 'john.doe@company.com'
    },
    {
      name: 'Jon Snow',
      email: 'john.snow@company.com'
    },
    {
      name: 'Danny Targaryan',
      email: 'danny.targaryan@company.com'
    }
  ]
};

const preloadedState2 = {
  customers: [
    'Jon Doe (john.doe@company.com)',
    'Jon Snow (john.snow@company.com)',
    'Danny Targaryan (danny.targaryan@company.com)'
  ]
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger),
  );
  return store;
}

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';

import { MainRoutes } from '../../../routes';

const Root = ({ store }) => (
  <Provider store={store}>
    <MainRoutes dispatch={store.dispatch}/>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

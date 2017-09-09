import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './features/common/containers/Root';
import './styles/main.scss';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root'), // eslint-disable-line no-undef
);

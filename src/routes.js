import React from 'react';
import PropTypes from 'prop-types';
import { Route, Router } from 'react-router-dom';
import App from './features/common/containers/App';
import Callback from './features/auth/components/Callback';
import AuthService from './features/auth/AuthService';
import { loginSuccess, loginFailure } from './features/auth/actions';
import history from './history';

const handleAuthentication = (nextState, dispatch) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    const success = (token, profile) => dispatch(loginSuccess(token, profile));
    const failure = () => dispatch(loginFailure());
    const authService = new AuthService();
    authService.handleAuthentication(success, failure);
  }
};

const MainRoutes = ({ dispatch }) => (
  <Router history={history} component={App}>
    <div>
      <Route path="/" render={props => <App {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props, dispatch);
        return <Callback {...props} />;
      }}/>
    </div>
  </Router>
);

MainRoutes.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default MainRoutes;

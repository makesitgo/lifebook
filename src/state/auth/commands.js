import { push, replace } from 'react-router-redux'
import { asyncCommandRunner } from 'state/util';
import * as actions from './actions';
import { commands as AlertCommands } from 'state/alert';
import { AuthService } from './service';

const logout = (destination = '/auth') => (dispatch) => {
  return AuthService.logout()
    .then(() => dispatch(actions.logout()))
    .then(() => dispatch(push(destination)));
};

const login = (username, password, destination = '/app') => {
  return asyncCommandRunner(
    actions.login,
    () => AuthService.login(username, password),
    { onSuccess: (dispatch, user) => dispatch(replace(destination)) }
  )
};

export {
    login,
    logout
};

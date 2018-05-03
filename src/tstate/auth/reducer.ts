import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { State } from './types';
import { login, logout } from './actions';

const initialState: State = {
  isLoggingIn: false,
  user: undefined,
  error: undefined,
}

export default reducerWithInitialState(initialState)
  .case(logout, state => initialState)
  .case(login.async.started, state => ({
    ...state,
    isLoggingIn: true,
    user: undefined,
    error: undefined
  }))
  .case(login.async.done, (state, { result: user }) => ({
    ...state,
    isLoggingIn: false,
    user,
    error: undefined
  }))
  .case(login.async.failed, (state, { error }) => ({
    ...state,
    isLoggingIn: false,
    user: undefined,
    error,
  }))

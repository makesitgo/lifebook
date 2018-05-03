import 'isomorphic-fetch';
import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { LoginRequest, State, User } from './types';
import { AuthService } from './service';

const create = actionCreatorFactory('auth');
const createAsync = asyncFactory<State>(create);

export const logout = create('logout');
export const login = createAsync<LoginRequest, User>(
  'login',
  (request, dispatch) => AuthService.login(request)
);

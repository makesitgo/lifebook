import { actionCreator, asyncActionCreator } from 'state/util';

const name = 'auth';

const login = asyncActionCreator(name, 'login');
const logout = actionCreator(name, 'logout');

export { login, logout };

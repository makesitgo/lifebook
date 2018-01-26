// import { createSelector } from 'reselect';
import { AuthService } from './service';

const root = 'auth';

export const getUser = (state) => state[root].user;

export const isLoggedIn = () => AuthService.isLoggedIn();

import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';
import { ActionsUnion, createAction, createAsyncAction } from '../actions';
import { User } from '../../models/auth';
import { AuthService } from './service';

export enum Actions {
  LOGIN = '[auth] login',
  LOGOUT = '[auth] logout',
}

export const Action = {
  login: (username: string, password: string) =>
    createAsyncAction<Actions.LOGIN, User, Error>(Actions.LOGIN),
  logout: () => createAction(Actions.LOGOUT),
}

export type Action = ActionsUnion<typeof Action>

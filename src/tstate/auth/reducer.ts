import produce from 'immer';
import { User } from '../../models/auth';
import { handleAsyncAction } from '../actions';
import { Action, Actions } from './actions';

export interface State {
  user?: User;
  err?: Error;
}

export const initialState: State = {
  user: undefined,
  err: undefined
};

export default (state: State = initialState, action: Action): State =>
  produce(state, draft => {
    switch (action.type) {
      case Actions.LOGIN:
        return handleAsyncAction(state, action, {
          onRequest: state => state,
          onSuccess: (state, payload) => {
            state.user = payload;
            return state;
          },
          onFailure: (state, error) => {
            state.err = error;
            return state;
          }
        });
      case Actions.LOGOUT:
        return initialState;
    }
  });

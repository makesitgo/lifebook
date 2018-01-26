import { composeReducer } from 'state/util';
import * as actions from './actions';

export const initialState = {
  user: undefined,
  err: undefined
};

export default composeReducer(
  initialState,
  [{ action: actions.logout, reducer: state => initialState }],
  [
    {
      action: actions.login,
      reducers: {
        onRequest: state => initialState,
        onSuccess: (state, payload) => {
          state.user = payload;
        },
        onFailure: (state, err) => {
          state.err = err;
        }
      }
    }
  ]
);

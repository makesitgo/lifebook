import { composeReducer } from 'state/util';
import * as actions from './actions';

export const initialState = {
  type: undefined,
  message: undefined
};

export default composeReducer(
  initialState,
  [
    {
      action: actions.success,
      reducer: (state, message) => {
        state.type = 'alert-success';
        state.message = message;
      }
    },
    {
      action: actions.error,
      reducer: (state, message) => {
        state.type = 'alert-danger';
        state.message = message;
      }
    },
    { action: actions.clear, reducer: state => initialState }
  ],
  []
);

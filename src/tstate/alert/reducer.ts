import produce from 'immer';
import { Alert, AlertTypes } from '../../models/alert';
import { Action, Actions } from './actions';

// TODO: support an array of alerts, display one at a time, support push/pull/clear on the array

// export interface State {
//   alerts: Alert[];
// }

export interface State {
  type: string;
  message: string;
}

export const initialState: State = {
  type: '',
  message: ''
};

export default (state: State = initialState, action: Action): State =>
  produce(state, draft => {
    switch (action.type) {

      case Actions.SHOW_ALERT:
        const { payload: alert } = action;
          const { type, message } = action.payload;

          switch (type) {
            case AlertTypes.SUCCESS:
              draft.type = 'alert-success';
              break;
            case AlertTypes.ERROR:
              draft.type = 'alert-danger';
              break;
          }

          draft.message = message;
          return;

      case Actions.CLEAR_ALERT:
        return initialState;
    }
  });

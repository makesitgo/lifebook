import { createAction, ActionsUnion } from '../actions';
import { Alert, AlertTypes } from '../../models/alert';

export enum Actions {
  SHOW_ALERT = '[alert] show',
  CLEAR_ALERT = '[alert] clear',
}

export const Action = {
  showAlert: (type: AlertTypes, message: string) => createAction(Actions.SHOW_ALERT, { type, message }),
  clearAlert: () => createAction(Actions.CLEAR_ALERT),
}

export type Action = ActionsUnion<typeof Action>

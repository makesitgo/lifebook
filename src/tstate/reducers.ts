import { combineReducers } from 'redux';
import alertReducer, { State as AlertState } from './alert/reducer';

export interface AppState {
  alert: AlertState
}

export default combineReducers<AppState>({
  alert: alertReducer,
});

import * as actions from './actions';
import { initialState } from './reducers';

export const successMessage = 'success alert';
export const successAction = (text = successMessage) => actions.success(text);
export const expectedSuccessAction = (payload = successMessage) => ({
  type: actions.success.toString(),
  payload
});
export const expectedSuccessState = (message = successMessage) => ({
  type: 'alert-success',
  message
});

export const errorMessage = 'error alert';
export const errorAction = (text = errorMessage) => actions.error(text);
export const expectedErrorAction = (payload = errorMessage) => ({
  type: actions.error.toString(),
  payload
});
export const expectedErrorState = (message = errorMessage) => ({ type: 'alert-danger', message });

export const clearAction = () => actions.clear();
export const expectedClearAction = () => ({ type: actions.clear.toString() });
export const initialClearState = (type = 'alert-success', message = successMessage) => ({
  type,
  message
});

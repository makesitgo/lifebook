import produce from 'immer';
import { createAction, createReducer } from 'redux-act';

const actionName = (type, action) => `${type}/${action}`;

const asyncActions = {
  request: 'REQUEST',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

const asyncRequest = creator => creator[asyncActions.request];
const asyncSuccess = creator => creator[asyncActions.success];
const asyncFailure = creator => creator[asyncActions.failure];

const defaultOnSuccessCallback = (dispatch, payload) => Promise.resolve(payload);
const defaultOnFailureCallback = (dispatch, err) => Promise.resolve(err);

export const actionCreator = (type, action, payloadReducer = (arg) => arg) => {
  return createAction(actionName(type, action), payloadReducer);
};

export const asyncActionCreator = (type, action) => {
  return Object.keys(asyncActions).reduce(
    (creator, key) =>
      Object.assign(creator, {
        [asyncActions[key]]: actionCreator(type, `${action}:${key}`)
      }),
    {}
  );
};

export const asyncCommandRunner = (
  creator,
  action,
  { onSuccess = defaultOnSuccessCallback, onFailure = defaultOnFailureCallback }
) => (dispatch, getState) => {
  dispatch(asyncRequest(creator)());
  return action().then(
    payload => Promise.resolve(dispatch(asyncSuccess(creator)(payload)))
      .then(() => onSuccess(dispatch, payload))
      .then(() => payload),
    err => Promise.resolve(dispatch(asyncFailure(creator)(err)))
      .then(() => onFailure(dispatch, err))
      .then(() => err)
  );
};

export const composeReducer = (
  initialState = {},
  syncActionHandlers = [],
  asyncActionHandlers = []
) => {
  const handlerTree = {};
  syncActionHandlers.forEach(({ action, reducer }) =>
    Object.assign(handlerTree, { [action]: produce(reducer) })
  );
  asyncActionHandlers.forEach(({ action, reducers: { onRequest, onSuccess, onFailure } }) => {
    if (onRequest) {
      Object.assign(handlerTree, { [asyncRequest(action)]: produce(onRequest) });
    }
    if (onSuccess) {
      Object.assign(handlerTree, { [asyncSuccess(action)]: produce(onSuccess) });
    }
    if (onFailure) {
      Object.assign(handlerTree, { [asyncFailure(action)]: produce(onFailure) });
    }
  });
  return createReducer(handlerTree, initialState);
};

export const handleHttpResponse = response => {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }
  return response.json();
};

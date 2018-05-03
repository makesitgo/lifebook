import { Dispatch } from "redux";

type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export interface Action<TYPE extends string> {
  type: TYPE;
}

export interface ActionWithPayload<TYPE extends string, PAYLOAD> extends Action<TYPE> {
  payload: PAYLOAD;
}

export function createAction<TYPE extends string>(type: TYPE): Action<TYPE>
export function createAction<TYPE extends string, PAYLOAD>(type: TYPE, payload: PAYLOAD): ActionWithPayload<TYPE, PAYLOAD>
export function createAction<TYPE extends string, PAYLOAD>(type: TYPE, payload?: PAYLOAD) {
  return payload === undefined ? { type } : { type, payload };
}

export enum AsyncStatus {
  ON_REQUEST,
  ON_SUCCESS,
  ON_FAILURE,
}

export type AsyncAction<TYPE extends string, PAYLOAD, ERROR> = AsyncRequestAction<TYPE> | AsyncSuccessAction<TYPE, PAYLOAD> | AsyncFailureAction<TYPE, ERROR>

export interface AsyncRequestAction<TYPE extends string> extends Action<TYPE> {
  status: AsyncStatus.ON_REQUEST;
}

export interface AsyncSuccessAction<TYPE extends string, PAYLOAD> extends Action<TYPE> {
  status: AsyncStatus.ON_SUCCESS;
  payload: PAYLOAD;
}

export interface AsyncFailureAction<TYPE extends string, ERROR> extends Action<TYPE> {
  status: AsyncStatus.ON_FAILURE;
  payload: ERROR;
}

export interface AsyncActionHandler<STATE, PAYLOAD, ERROR> {
  onRequest: (state: STATE) => STATE;
  onSuccess: (state: STATE, payload: PAYLOAD) => STATE;
  onFailure: (state: STATE, error: ERROR) => STATE;
}

export function createAsyncAction<TYPE extends string, PAYLOAD, ERROR>( type: TYPE ): AsyncAction<TYPE, PAYLOAD, ERROR> {
  return { type, status: AsyncStatus.ON_REQUEST };
}

const dispatchAsyncAction = <STATE, TYPE extends string, PAYLOAD, ERROR>(action: AsyncAction<TYPE, PAYLOAD, ERROR>, worker: () => {}) =>
  (dispatch: Dispatch<AsyncAction<TYPE, PAYLOAD, ERROR>, STATE>, getState: () => STATE) => {
    // action.status = AsyncStatus.ON_REQUEST;
    dispatch(action);

    action.status = AsyncStatus.ON_SUCCESS;
    action.payload = {};
    dispatch(action);

    action.status = AsyncStatus.ON_FAILURE;
    dispatch(action);
  };

export const handleAsyncAction = <STATE, TYPE extends string, PAYLOAD, ERROR>(state: STATE, action: AsyncAction<TYPE, PAYLOAD, ERROR>, handler: AsyncActionHandler<STATE, PAYLOAD, ERROR>): STATE => {
  switch (action.status) {
    case AsyncStatus.ON_REQUEST:
      return handler.onRequest(state);
    case AsyncStatus.ON_SUCCESS:
      return handler.onSuccess(state, action.payload);
    case AsyncStatus.ON_FAILURE:
      return handler.onFailure(state, action.payload);
    default:
      return state;
  }
};

import reducer, { initialState } from '../reducers';
import * as util from '../test_util';

describe('alert reducer', () => {
  it('should return the initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  it('should handle a success action', () => {
    expect(reducer(initialState, util.successAction())).toEqual(util.expectedSuccessState());
  });

  it('should handle an error action', () => {
    expect(reducer(initialState, util.errorAction())).toEqual(util.expectedErrorState());
  });

  it('should handle a clear action', () => {
    expect(reducer(util.initialClearState(), util.clearAction())).toEqual(initialState);
  });
});

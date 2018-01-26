import * as util from '../test_util';

describe('alert actions', () => {
  it('should create an action to display a success alert', () => {
    expect(util.successAction()).toMatchObject(util.expectedSuccessAction());
  });

  it('should create an action to display a error alert', () => {
    expect(util.errorAction()).toMatchObject(util.expectedErrorAction());
  });

  it('should create an action to clear an alert', () => {
    expect(util.clearAction()).toMatchObject(util.expectedClearAction());
  });
});

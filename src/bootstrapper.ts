import * as React from 'react';
import thunk from 'redux-thunk';
// import { createBrowserHistory, createMemoryHistory } from 'history';
import { applyMiddleware, createStore, compose, Middleware, Store } from 'redux';
import { ReqresClient } from 'reqres-client';
import reducers from './tstate/reducers';
import { setReqres } from './tstate/actions';

const ENV_PROD = 'production';

export default class UI {
  public history: any;
  private middlewares: Middleware[];
  private reqresUrl: string;
  public store: Store;

  constructor(
    public reqres: ReqresClient,
    public env: string = ENV_PROD,
    public settings: WindowSettings = {}
  ) {
    // this.history = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
    this.middlewares = [thunk];
    this.reqresUrl = this.settings.reqresUrl ? this.settings.reqresUrl : '';

    let composeEnhancers: <R>(a: R) => R;
    if (this.env !== ENV_PROD) {
      this.setupLoggerMiddleware();
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
      composeEnhancers = compose;
    }

    this.store = createStore(reducers, composeEnhancers(applyMiddleware(...this.middlewares)));
    this.store.dispatch(setReqres(this.reqres));
  }

  setupLoggerMiddleware() {
    const { createLogger } = require('redux-logger');
    this.middlewares.push(createLogger({ duration: true }));
  }
}

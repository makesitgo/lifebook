import * as React from 'react';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import reducers from './tstate/reducers';

const ENV_PROD = 'production';

// const actionToPlainObject: MiddlewareFn<{}, Action> = store => next => action => next({ ...action });

export default class Bootstrapper {
  store: Store;

  constructor(
    public env = ENV_PROD,
    public settings = {},
    private history = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory(),
    private middlewares = [thunk, routerMiddleware(history)],
  ) {
    let composeEnhancers;
    if (this.env === ENV_PROD) {
      composeEnhancers = compose;
    } else {
      this.applyLoggerMiddleware();
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }
    const enhancer = composeEnhancers(applyMiddleware(...this.middlewares));
    this.store = createStore(reducers, enhancer);
  }

  applyLoggerMiddleware() {
    const { createLogger } = require('redux-logger');
    this.middlewares.push(
      createLogger({ duration: true })
    );
  }
}

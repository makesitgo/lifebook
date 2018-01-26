import React from 'react';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'state/reducers';

const ENV_PROD = 'production';

export default class Bootstrapper {
  constructor(env = ENV_PROD, settings = {}) {
    this.env = env;
    this.settings = settings;
    this.middlewares = [thunk];

    this.history = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
    this.middlewares.push(routerMiddleware(this.history));

    let composeEnhancers;
    if (this.env === ENV_PROD) {
      composeEnhancers = compose;
    } else {
      this.applyLoggerMiddleware();
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
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

import * as React from 'react';
import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import alertReducer from './alert/reducer';
import authReducer from './auth/reducer';

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  // routing: routerReducer,
});

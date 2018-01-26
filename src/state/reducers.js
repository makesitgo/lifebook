import React from 'react';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import alertReducer from 'state/alert';
import authReducer from 'state/auth';

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  routing: routerReducer,
});

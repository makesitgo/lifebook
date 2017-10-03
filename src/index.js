/* global document */
/* eslint import/no-extraneous-dependencies: ["error", {}] */
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// app imports
import App from 'containers/App';

const rootElement = document.getElementById('root');

const render = Component =>
  ReactDom.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement,
  );

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}

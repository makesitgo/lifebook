import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Bootstrapper from 'bootstrapper';
import ViewRouter from 'view/router';

require('../static/favicon.ico');
require('../static/index.less');

const bootstrapper = new Bootstrapper(process.env.NODE_ENV, window.settings);

const render = (Component) =>
  ReactDom.render(
    <Provider store={bootstrapper.store}>
      <AppContainer>
        <Component history={bootstrapper.history} />
      </AppContainer>
    </Provider>,
    document.getElementById('root'));

render(ViewRouter);

if (module.hot) {
  module.hot.accept('./view/router', () =>  render(ViewRouter));
}

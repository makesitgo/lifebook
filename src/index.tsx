import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import ViewRouter from './view/router';
import UI from './bootstrapper';

import { ReqresClientFactory } from 'reqres-client';

require('../static/favicon.ico');
require('../static/index.less');

declare global {
  interface WindowSettings {
    reqresUrl?: string;
  }
  interface Window {
    settings: WindowSettings;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <R>(a: R) => R;
  }
}

declare var module: { hot: any };

ReqresClientFactory.create({ baseUrl: window.settings.reqresUrl }).then(client => {
  const ui = new UI(client, process.env.NODE_ENV, window.settings);

  const render = (Component: React.ReactNode = ViewRouter) =>
    ReactDom.render(
      <Provider store={ui.store}>
        <AppContainer>
          <React.Component history={ui.history} />
        </AppContainer>
      </Provider>,
      document.getElementById('root')
    );

  render();

  if (module.hot) {
    module.hot.accept('./view/router', () => render());
  }
});

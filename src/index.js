import React from 'react';
import ReactDOM from 'react-dom';

import HomeContainer from './containers/HomeContainer';

import { Provider } from 'react-redux';
import store from './store/store';

import './styles/main.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <HomeContainer/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

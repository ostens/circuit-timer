import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/index";
import App from "./components/App/App";
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();

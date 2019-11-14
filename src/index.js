import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter } from "react-router-dom";

import TemplateContainer from "./containers/TemplateContainer";

import "./styles/main.scss";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <TemplateContainer>
      <BrowserRouter>BrowserRouter</BrowserRouter>
    </TemplateContainer>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

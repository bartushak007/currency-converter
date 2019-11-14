import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/store";
import {  HashRouter, Switch, Route } from "react-router-dom";

import TemplateContainer from "./containers/TemplateContainer";
import ConverterContainer from "./containers/ConverterContainer";
import CurrenciesListContainer from "./containers/CurrenciesListContainer";
import Both from "./pages/both";
import "./styles/main.scss";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter base="/">
      <TemplateContainer>
        <Switch>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            component={ConverterContainer}
            exact
          />
          <Route path={`/currencies`} component={CurrenciesListContainer} />
          <Route path={`/both`} component={Both} />
        </Switch>
      </TemplateContainer>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

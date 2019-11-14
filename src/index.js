import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TemplateContainer from "./containers/TemplateContainer";
import ConverterContainer from "./containers/ConverterContainer";
import CurrenciesListContainer from "./containers/CurrenciesListContainer";
import "./styles/main.scss";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <TemplateContainer>
        <Switch>
          <Route path="/" component={ConverterContainer} exact />
          <Route path={`/currencies`} component={CurrenciesListContainer} />
        </Switch>
      </TemplateContainer>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

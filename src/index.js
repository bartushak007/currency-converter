import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import TemplateContainer from "./containers/TemplateContainer";
import Converter from "./pages/converter";
import CurrenciesList from "./pages/currenciesList";
import "./styles/main.scss";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <TemplateContainer>
        <Switch>
          <Route path="/" component={Converter} exact />
          <Route path={`/currencies`} component={CurrenciesList} />
        </Switch>
      </TemplateContainer>{" "}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

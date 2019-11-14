import {
  LOAD_CURRENCIES,
  FETCH_CURRENCIES,
  SET_CURRENCIES_LOAD_ERROR,
  SET_BASE_CURRENCY
} from "./types";

import { selectCurrencyURL } from "../dataTemplate/dataTemplateSelectors";
import { selectConverterBase } from "../converter/convertSelectors";

import { resolvePath } from "../../helpers/index";

export const setLoadCurrencies = isLoading => ({
  type: LOAD_CURRENCIES,
  isLoading
});

export const setCurrenciesLoadError = isError => ({
  type: SET_CURRENCIES_LOAD_ERROR,
  isError
});

export const setBaseCurrency = base => ({ type: SET_BASE_CURRENCY, base });

export const fetchCurrency = () => (dispatch, state) => {
  const currentState = state();
  const URL = selectCurrencyURL(currentState);
  const base = selectConverterBase(currentState);
  dispatch(setLoadCurrencies(true));

  fetch(URL ? resolvePath(URL) : null)
    .then(j => j.json())
    .then(data => {
      dispatch({ type: FETCH_CURRENCIES, data: data.rates });
      dispatch(setCurrenciesLoadError(false));
      dispatch(setBaseCurrency(base || data.base));
    })
    .catch(() => dispatch(setCurrenciesLoadError(true)))
    .finally(() => dispatch(setLoadCurrencies(false)));
};

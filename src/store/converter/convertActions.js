import {
  LOAD_CURRENCIES,
  FETCH_CURRENCIES,
  SET_CURRENCIES_LOAD_ERROR,
  SET_BASE_CURRENCY,
  ADD_SELECTED_CURRENCY,
  REMOVE_SELECTED_CURRENCY
} from "./types";

import { selectCurrencyURL } from "../dataTemplate/dataTemplateSelectors";
import { selectConverterBase } from "../converter/convertSelectors";

import { resolvePath } from "../../helpers/index";

export const addToSelected = selected => ({
  type: ADD_SELECTED_CURRENCY,
  selected
});

export const removeFromSelected = removed => ({
  type: REMOVE_SELECTED_CURRENCY,
  removed
});

export const setLoadCurrencies = isLoading => ({
  type: LOAD_CURRENCIES,
  isLoading
});

export const setCurrenciesLoadError = isError => ({
  type: SET_CURRENCIES_LOAD_ERROR,
  isError
});

export const setBaseCurrency = base => dispatch => {
  
  dispatch({ type: SET_BASE_CURRENCY, base });
  
};



export function fetchCurrency (currencyBase)  {
  return (dispatch, state) => {
    const currentState = state();
    const URL = selectCurrencyURL(currentState);
    const base = currencyBase || selectConverterBase(currentState);
    dispatch(setLoadCurrencies(true));
  
    fetch(URL ? resolvePath(URL) : null)
      .then(j => j.json())
      .then(data => {
        const rates =
          base === "USD"
            ? data.rates
            : Object.entries(data.rates).reduce(
                (obj, [key, value]) => ({
                  ...obj,
                  [key]: value / data.rates[base]
                }),
                {}
              );
  
        dispatch({ type: FETCH_CURRENCIES, data: rates });
        dispatch(setCurrenciesLoadError(false));
        dispatch(setBaseCurrency(base || data.base));
      })
      .catch(() => dispatch(setCurrenciesLoadError(true)))
      .finally(() => dispatch(setLoadCurrencies(false)));
  }
};

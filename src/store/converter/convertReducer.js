import {
  LOAD_CURRENCIES,
  FETCH_CURRENCIES,
  SET_CURRENCIES_LOAD_ERROR,
  SET_BASE_CURRENCY
} from "./types";

const convertReducer = (
  store = { currencyList: [], isError: false, isLoading: false, base: 'USD' },
  action
) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return {
        ...store,
        currencyList: action.data
      };

    case LOAD_CURRENCIES:
      return { ...store, isLoading: action.isLoading };

    case SET_CURRENCIES_LOAD_ERROR:
      return { ...store, isError: action.isError };

    case SET_BASE_CURRENCY:
      return { ...store, base: action.base };

    default:
      return store;
  }
};

export default convertReducer;

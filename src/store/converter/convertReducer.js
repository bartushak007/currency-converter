import {
  LOAD_CURRENCIES,
  FETCH_CURRENCIES,
  SET_CURRENCIES_LOAD_ERROR,
  SET_BASE_CURRENCY,
  ADD_SELECTED_CURRENCY,
  REMOVE_SELECTED_CURRENCY
} from "./types";

const convertReducer = (
  store = {
    currencyList: [],
    isError: false,
    isLoading: false,
    base: "USD",
    selections: []
  },
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

    case ADD_SELECTED_CURRENCY:
      return { ...store, selections: [...store.selections, action.selected] };

    case REMOVE_SELECTED_CURRENCY:
      return {
        ...store,
        selections: store.selections.filter(elem => elem !== action.removed)
      };

    default:
      return store;
  }
};

export default convertReducer;

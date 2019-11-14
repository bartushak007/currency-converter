import { LOAD_DATA_TEMPLATE, FETCH_DATA_TEMPLATE } from "./types";

const convertReducer = (store = { isLoading: false }, action) => {
  switch (action.type) {
    case FETCH_DATA_TEMPLATE:
      return {
        ...store,
        data: action.data
      };

    case LOAD_DATA_TEMPLATE:
      return { ...store, isLoading: action.isLoading };

    default:
      return store;
  }
};

export default convertReducer;

import { LOAD_DATA_TEMPLATE, FETCH_DATA_TEMPLATE } from "./types";

import { resolvePath } from "../../helpers/index";

export const setLoadDataTemplate = isLoading => ({ type: LOAD_DATA_TEMPLATE, isLoading });

export const fetchDataTemplate = () => dispatch => {
  dispatch(setLoadDataTemplate(true));

  fetch(resolvePath("data.json"))
    .then(j => j.json())
    .then(data => {
      dispatch({ type: FETCH_DATA_TEMPLATE, data });
      dispatch(setLoadDataTemplate(false));
    });
};



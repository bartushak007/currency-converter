import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const customMiddleWare = store => next => action => {
  next(action);
  localStorage.setItem("initLocalStorageCurrency", JSON.stringify(store.getState()));
};

const initialState = JSON.parse(localStorage.getItem("initLocalStorageCurrency")) || {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, customMiddleWare)
);

// store.subscribe(()=> console.log(store.getState()))

export default store;

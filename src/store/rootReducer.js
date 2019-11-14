import { combineReducers } from 'redux';
import convertReducer from './converter/convertReducer';

export default combineReducers({
  converter: convertReducer
});

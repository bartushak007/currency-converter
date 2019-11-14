import { combineReducers } from 'redux';

import convertReducer from './converter/convertReducer';
import dataTemplateReducer from './dataTemplate/dataTemplateReducer';

export default combineReducers({
  converter: convertReducer,
  dataTemplate: dataTemplateReducer
});

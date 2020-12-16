import { combineReducers } from 'redux';

import authReducer from './authReducer';
import phonesReducer from './phonesReducer';
import errorReducer from './errorReducer';
import uiReducer from './uiReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  phones: phonesReducer,
  errors: errorReducer,
  ui: uiReducer
});

export default rootReducers;
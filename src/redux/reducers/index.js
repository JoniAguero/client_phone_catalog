import { combineReducers } from 'redux';

import phonesReducer from './phonesReducer';
import errorReducer from './errorReducer';

const rootReducers = combineReducers({
  phones: phonesReducer,
  errors: errorReducer
});

export default rootReducers;
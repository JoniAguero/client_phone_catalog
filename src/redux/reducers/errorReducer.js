/* eslint-disable import/no-anonymous-default-export */
import { types } from '../types/index';

const initialState = {
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.setError:
      return {
        error: action.payload
      };
    default:
      return state;
  }
};

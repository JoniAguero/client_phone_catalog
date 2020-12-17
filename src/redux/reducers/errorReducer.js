/* eslint-disable import/no-anonymous-default-export */
import { types } from '../types/index';

const initialState = {
  error: '',
  time: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.setError:
      return {
        error: action.payload,
        time: Date.now()
      };
    default:
      return state;
  }
};

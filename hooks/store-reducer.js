import {
  GET_NOTES
} from '../constants';
import * as R from './resolvers';

const storeReducer = (state, { type, payload }) => {
  switch (type) {
  case GET_NOTES:
    return R.getNotes(state, payload);
  default: return state;
  }
};

export default storeReducer;

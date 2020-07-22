import { INITIAL_STATE } from '../constants';

export const getNotes = (state, payload) => {
  const newState = { ...state };

  return Object.freeze({ ...newState });
};

import React, { useReducer, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { INITIAL_STATE } from '../constants';
import storeReducer from './store-reducer';

const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, INITIAL_STATE);

  const storeValue = useMemo(() => {
    console.log(state);
    return { state, dispatch} ;
  }, [state, dispatch]);

  return (
    <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>
  );
}


StoreProvider.propTypes = {
  children: PropTypes.node,
};

export { StoreContext, StoreProvider };

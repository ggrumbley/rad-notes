import React from 'react';

import App from '../components/App';
import { StoreProvider } from '../hooks';

const Home = () => (
  <StoreProvider>
    <App/>
  </StoreProvider>
);


export default Home;

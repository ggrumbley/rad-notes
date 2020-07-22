import React from 'react';

import Sidebar from '../components/Sidebar';
import Editor from '../components/Editor';

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="title">Rad Notes</h1>
      </div>
      <div className="min-h-screen md:flex">
        <Sidebar />
        <Editor />
      </div>
    </div>
  );
};

export default Home;

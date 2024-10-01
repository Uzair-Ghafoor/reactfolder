import React, { useState } from 'react';
import data from './data.json';
import Component from './Component';
const App = () => {
  return (
    <div className=' flex flex-wrap gap-4'>
      {data.map((link) => {
        return <Component {...link} key={link.id} />;
      })}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import data from './data.json';
import Component from './Component';
const App = () => {
  const [name, setName] = useState('hello');

  return (
    <>
      <div>{name}</div>
      <button onClick={() => setName('world')}></button>
    </>
    // <div className=' flex flex-wrap gap-4'>
    //   {data.map((link) => {
    //     return <Component {...link} key={link.id} />;
    //   })}
    //   <div>hello</div>
    // </div>
  );
};

export default App;

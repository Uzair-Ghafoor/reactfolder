import React, { useEffect, useState } from 'react';
import Component from './Component';
import axios from 'axios';
const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [data1, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(url);
      setData(data.data);
    };
    getData();
  }, []);
  console.log(data1);
  return (
    <div className=' bg-gray-200'>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7  max-w-[75vw] mx-auto pt-14'>
        {data1.map((list) => {
          return <Component {...list} key={list.id} />;
        })}
      </div>
    </div>
  );
};

export default App;

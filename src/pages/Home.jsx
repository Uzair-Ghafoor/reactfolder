import axios from 'axios';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
const url = 'https://www.course-api.com/react-tours-project';
const Home = () => {
  const getData = async () => {
    try {
      const data = await axios.get(url);
      toast('worked');
    } catch (error) {
      console.log(error);
      toast.error('error');
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>{}</div>;
};

export default Home;

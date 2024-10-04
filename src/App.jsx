import React, { useState } from 'react';
import TextInput from './components/TextInput';
import axios from 'axios';

const App = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        'https://localhost:3500/api/v1/auth/signup',
        form
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=' flex flex-col justify-center items-center h-[100vh] bg-slate-300'>
      <form
        onSubmit={handleSubmit}
        className=' bg-white px-20 py-10 flex flex-col gap-y-8 rounded-lg'
      >
        <TextInput
          id={'username'}
          placeholder={'enter your name'}
          onChange={handleChange}
        />
        <TextInput
          id={'email'}
          placeholder={'enter your email'}
          onChange={handleChange}
        />
        <TextInput
          id={'password'}
          placeholder={'enter your password'}
          onChange={handleChange}
        />
        <button className=' w-full bg-red-300'>click me</button>
      </form>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import TextInput from './components/TextInput';

const App = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  console.log(form);
  const handleSubmit = () => {
    setLoading(true);
    try {
      const hahah = axios.post('localhost:', form);
      if (hahah) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=' flex flex-col gap-y-5 items-center justify-center bg-gray-400 h-[100vh]'
    >
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className=' w-fit h-fit bg-white p-10 rounded-lg'>
          <TextInput
            type={'text'}
            placeholder={'username'}
            onChange={handleChange}
            id={'username'}
          />
          <TextInput
            type={'email'}
            placeholder={'email'}
            onChange={handleChange}
            id={'email'}
          />
          <TextInput
            type={'password'}
            placeholder={'password'}
            onChange={handleChange}
            id={'password'}
          />
          <button className=' mt-6 bg-slate-500 text-white w-full p-1 rounded-lg'>
            Click
          </button>
          {error && <p>{error}</p>}
        </div>
      )}
    </form>
  );
};

export default App;

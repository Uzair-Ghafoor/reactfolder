import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../features/counterSlice';
const Home = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  return (
    <div className=' flex justify-center items-center h-[100vh]'>
      <div className=' flex flex-col gap-y-5 justify-center items-center'>
        <div>{value}</div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          incrementByAmount
        </button>
      </div>
    </div>
  );
};

export default Home;

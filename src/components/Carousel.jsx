import React from 'react';

const Carousel = ({ src1, src2, src3, src4 }) => {
  return (
    <div className='carousel w-[30vw] h-[40vh] rounded-box'>
      <div className='carousel-item mr-2'>
        <img src={src1} className=' rounded-2xl' alt='Burger' />
      </div>
      <div className='carousel-item mr-2'>
        <img src={src2} className=' rounded-2xl' alt='Burger' />
      </div>
      <div className='carousel-item mx-2'>
        <img src={src3} className=' rounded-2xl' alt='Burger' />
      </div>
      <div className='carousel-item mr-2'>
        <img src={src4} className=' rounded-2xl' alt='Burger' />
      </div>
      <div className='carousel-item mr-2'>
        <img src={src1} className=' rounded-2xl' alt='Burger' />
      </div>
      <div className='carousel-item mr-2'>
        <img src={src2} className=' rounded-2xl' alt='Burger' />
      </div>
      <div className='carousel-item mr-2'>
        <img src={src4} className=' rounded-2xl' alt='Burger' />
      </div>
    </div>
  );
};

export default Carousel;

import React from 'react';

const Card = ({ source, title, desc, button }) => {
  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <figure>
        <img src={source} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{desc}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-accent'>{button}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

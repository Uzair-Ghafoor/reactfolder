import React from 'react';

const Component = (props) => {
  return (
    <div
      className={` p-5 flex flex-col rounded-lg gap-y-4 ${
        props.isTrue ? 'bg-red-500' : 'bg-gray-200'
      }`}
    >
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
};

export default Component;

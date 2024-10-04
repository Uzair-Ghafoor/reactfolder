import React from 'react';

const TextInput = ({ type, placeholder, id, style, onChange }) => {
  return (
    <div className=' flex flex-col gap-y-1'>
      <label htmlFor={id} className=' capitalize ml-2'>
        {placeholder}
      </label>
      <input
        type={type}
        name={id}
        className={`border border-gray-300 p-2 rounded-lg ${style} `}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;

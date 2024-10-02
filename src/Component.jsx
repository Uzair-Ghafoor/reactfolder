import React, { useState } from 'react';

const Component = ({ image, info, name, price }) => {
  return (
    <div className=' max-w-[20vw] bg-white relative rounded-lg'>
      <img
        src={image}
        className=' w-full h-[30vh] rounded-t-lg object-cover'
        alt=''
      />
      <div className='p-5 flex flex-col gap-y-3'>
        <h1 className=' px-2 text-center font-semibold text-xl'>{name}</h1>
        <p>{info}</p>
      </div>
      <p className=' absolute top-0 right-0 rounded-tr-lg bg-green-600 text-white text-xl p-2 '>
        ${price}
      </p>
    </div>
  );
};

export default Component;
// import React from 'react';

// const Component = ({name,email}) => {
//   const { name, email } = props;
//   return (
//     <div
//       className={` p-5 flex flex-col rounded-lg gap-y-4 ${
//         props.isTrue ? 'bg-red-500' : 'bg-gray-200'
//       }`}
//     >
//       <h2>{props.name}</h2>
//       <p>{props.email}</p>
//     </div>
//   );
// };

// export default Component;

import React from "react";

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-96'>
      <div className='flex flex-col justify-center items-center h-96'>
        <p className='font-semibold text-secondary text-2xl'>Loading...</p>
        <progress className='progress w-56 progress-secondary'></progress>;
      </div>
    </div>
  );
};

export default Loading;

import React from "react";

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center h-96'>
      <div className='flex flex-col justify-center items-center h-96'>
        <p className='font-semibold text-primary text-2xl'>Loading...</p>
        <progress className='progress w-56 progress-primary'></progress>
      </div>
    </div>
  );
};

export default Loading;

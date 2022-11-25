import React from "react";

const Infosection = () => {
  return (
    <div className='mx-5 my-16 grid grid-cols-3 gap-10'>
      <div className='card card-side bg-base-300 shadow-xl p-5 py-8 rounded-md'>
        <div className='mr-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#f28c18'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M17 2.1l4 4-4 4' />
            <path d='M3 12.2v-2a4 4 0 0 1 4-4h12.8M7 21.9l-4-4 4-4' />
            <path d='M21 11.8v2a4 4 0 0 1-4 4H4.2' />
          </svg>
        </div>
        <div className=''>
          <h2 className='card-title'>Shipping & Return</h2>
          <p>We ensure your Shipping & Return</p>
        </div>
      </div>
      <div className='card card-side bg-base-300 shadow-xl p-5 py-8 rounded-md'>
        <div className='mr-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#f28c18'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <path d='M3 18v-6a9 9 0 0 1 18 0v6'></path>
            <path d='M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z'></path>
          </svg>
        </div>
        <div className=''>
          <h2 className='card-title'>Customer Support 24/7</h2>
          <p>Instant access to support</p>
        </div>
      </div>
      <div className='card card-side bg-base-300 shadow-xl p-5 py-8 rounded-md'>
        <div className='mr-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#f28c18'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <rect x='2' y='4' width='20' height='16' rx='2' />
            <path d='M7 15h0M2 9.5h20' />
          </svg>
        </div>
        <div className=''>
          <h2 className='card-title'>100% Secure Payment</h2>
          <p>We ensure secure payment!</p>
        </div>
      </div>
    </div>
  );
};

export default Infosection;

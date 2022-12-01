import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/Banner imgs/4.jpg";

const HomeBanner = () => {
  return (
    <div
      className='hero min-h-screen bg-fixed'
      style={{
        backgroundImage: `url(${banner})`,
      }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-1 text-3xl font-bold'>Welcome</h1>
          <h1 className='mb-0 text-6xl font-bold text-primary'>To</h1>
          <h1 className='mb-5 md:text-4xl text-3xl font-bold'>
            Wild Camera Zone{" "}
          </h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to='/product/all' className='btn btn-primary font-bold'>
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

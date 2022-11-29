import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import Login from "../../Sign-IN-UP/Login";

const OneCategories = () => {
  const products = useLoaderData();
  if (products?.message) {
    return <Login>We did not recognize you! Please Login/SignUp</Login>;
  }
  return (
    <section className='m-5'>
      {products.length === 0 ? (
        <div className='flex h-screen justify-center'>
          <h2 className='text-3xl my-20 text-center '>Here Is No Product</h2>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-y-5 my-3'>
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default OneCategories;

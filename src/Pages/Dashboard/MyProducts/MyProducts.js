import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";
import { useAuth } from "../../../Contexts/AuthProvider";
import Loading from "../../Share/Loading/Loading";

const MyProducts = () => {
  const { user } = useAuth();
  const { isLoading, data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`http://localhost:5000/product?email=${user.email}`).then((res) =>
        res.json()
      ),
  });
  console.log(
    "🚀 ~ file: MyProducts.js ~ line 13 ~ MyProducts ~ products",
    products
  );

  if (isLoading) return <Loading></Loading>;

  return (
    <section>
      <h2 className='text-3xl'>My Product</h2>

      <table className='table table-zebra w-full my-3'>
        <thead>
          <tr>
            <th className='bg-base-300'></th>
            <th className='bg-base-300'>Product Name</th>
            <th className='bg-base-300'>Posted Date</th>
            <th className='bg-base-300'>Resell Price</th>
            <th className='bg-base-300'>Statues</th>
            <th className='bg-base-300'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr key={product._id}>
              <td>{i + 1}</td>
              <td className='font-semibold text-sm'>{product.product_name}</td>
              <td className='font-semibold text-sm'>
                {format(new Date(product.upload_time), "PP")}
              </td>
              <td className='font-semibold text-sm'>
                {product.resell_price}
                <span className='text-red-600 text-2xl'> ৳</span>
              </td>
              <td className='font-semibold text-sm capitalize text-warning'>
                {product.product_statues}
              </td>

              <td>
                <button className='btn btn-square btn-outline btn-error btn-xs'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyProducts;

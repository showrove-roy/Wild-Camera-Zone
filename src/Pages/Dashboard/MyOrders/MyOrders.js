import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../../Contexts/AuthProvider";
import Loading from "../../Share/Loading/Loading";
import Login from "../../Sign-IN-UP/Login";

const MyOrders = () => {
  const { user } = useAuth();
  const {
    isLoading,
    data: orders = [],
    refetch,
  } = useQuery({
    queryKey: ["myOrders", user.email],
    queryFn: () =>
      fetch(`http://localhost:5000/booking?email=${user.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("jwToken")}`,
        },
      }).then((res) => res.json()),
  });
  // if (isLoading) return <Loading></Loading>;
  if (orders?.message) {
    return <Login>We did not recognize you! Please Login/SignUp</Login>;
  }
  return (
    <section>
      <h2 className='text-3xl'>My Orders</h2>
      <table className='table table-zebra w-full my-3'>
        <thead>
          <tr>
            <th className='bg-base-300' style={{ position: "revert" }}></th>
            <th className='bg-base-300'>Product Name</th>
            <th className='bg-base-300'>Price</th>
            <th className='bg-base-300'>Statues</th>
            <th className='bg-base-300'>Pay</th>
            <th className='bg-base-300'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, i) => (
            <tr key={order._id}>
              <td>{i + 1}</td>
              <td className='font-semibold text-sm'>{order.productName}</td>
              <td className='font-semibold text-sm'>
                {order.productPrice}
                <span className='text-red-600 text-2xl'> ৳</span>
              </td>
              <td className='font-semibold text-sm uppercase text-primary'>
                {order.productStatues}
              </td>
              <td>
                <button className='btn btn-info btn-xs'>Pay</button>
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

export default MyOrders;

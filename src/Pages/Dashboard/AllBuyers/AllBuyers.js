import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Share/Loading/Loading";

const AllBuyers = () => {
  const {
    isLoading,
    data: buyers = [],
    refetch,
  } = useQuery({
    queryKey: ["all_buyers"],
    queryFn: () =>
      fetch("http://localhost:5000/users?role=buyer").then((res) => res.json()),
  });
  if (isLoading) return <Loading></Loading>;
  return (
    <section>
      <h2 className='text-3xl'>All Buyers</h2>
      <table className='table table-zebra w-full my-3'>
        <thead>
          <tr>
            <th className='bg-base-300' style={{ position: "revert" }}></th>
            <th className='bg-base-300'>Name</th>
            <th className='bg-base-300'>Email</th>
            <th className='bg-base-300'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {buyers?.map((buyer, i) => (
            <tr key={buyer._id}>
              <td>{i + 1}</td>
              <td className='font-semibold text-sm'>{buyer.name}</td>
              <td className='font-semibold text-sm'>{buyer.email}</td>

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

export default AllBuyers;

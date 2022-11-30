import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Share/Loading/Loading";
import Login from "../../Sign-IN-UP/Login";

const AllBuyers = () => {
  const {
    isLoading,
    data: buyers = [],
    refetch,
  } = useQuery({
    queryKey: ["all_buyers"],
    queryFn: () =>
      fetch("http://localhost:5000/users?role=buyer", {
        headers: {
          authorization: `bearer ${localStorage.getItem("jwToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handelDelete = (id) => {
    const conformation = window.confirm("Want to Delete?");
    if (conformation) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
            toast.success("Delete Successfully");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  if (isLoading) return <Loading></Loading>;
  if (buyers?.message) {
    return <Login>We did not recognize you! Please Login/SignUp</Login>;
  }
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
                <button
                  onClick={() => handelDelete(buyer._id)}
                  className='btn btn-square btn-outline btn-error btn-xs'>
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

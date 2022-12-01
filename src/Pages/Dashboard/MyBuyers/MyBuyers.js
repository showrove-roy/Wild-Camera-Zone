import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useAuth } from "../../../Contexts/AuthProvider";
import Loading from "../../Share/Loading/Loading";

const MyBuyers = () => {
  const { user } = useAuth();
  const { isLoading, data: mydata = [] } = useQuery({
    queryKey: ["mybuyers"],
    queryFn: () =>
      axios.get(
        `https://wild-camera-zone-server.vercel.app/mybuyers/${user.email}`
      ),
  });

  if (isLoading) return <Loading></Loading>;
  let mybuyers = mydata?.data;

  return (
    <section>
      <h2 className='text-3xl'>My Buyers</h2>
      <table className='table table-zebra w-full my-3'>
        <thead>
          <tr>
            <th className='bg-base-300' style={{ position: "revert" }}></th>
            <th className='bg-base-300'>Product Name</th>
            <th className='bg-base-300'>Posted Date</th>
            <th className='bg-base-300'>Resell Price</th>
          </tr>
        </thead>
        <tbody>
          {mybuyers?.map((buyer, i) => (
            <tr key={buyer._id}>
              <td>{i + 1}</td>
              <td className='font-semibold text-sm'>{buyer.buyerName}</td>
              <td className='font-semibold text-sm'>{buyer.buyerEmail}</td>
              <td className='font-semibold text-sm capitalize text-warning'>
                {buyer.buyerPhone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyBuyers;

import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";

const SelectedClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data = [], refetch } = useQuery({
    queryKey: ["courses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`dashboard/myClasses?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Available Seat</th>
            <th>PAY</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                </div>
              </div>
            </td>
            <td>Zemlak</td>
            <td>Purple</td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;

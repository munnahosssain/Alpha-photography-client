import React from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const { data: cls = [], refetch } = useQuery({
    queryKey: ["cls"],
    queryFn: () =>
      axios.get("https://alpha-photography-server.vercel.app/classes").then((res) => {
        return res.data;
      }),
  });

  const handleStatus = (id, updateStatus) => {
    fetch(`https://alpha-photography-server.vercel.app/classes/${id}?status=${updateStatus}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class has been Approved!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="font-semibold text-4xl text-center mb-8">
        Manage Classes
      </h2>

      <div className="overflow-x-auto w-full ml-4">
        <table className="table w-full">
          <thead>
            <tr className="text-black text-sm">
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {cls.map((classes, index) => (
              <tr key={classes._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="">
                    <div className=" w-32 h-20">
                      <img
                        className="rounded-md"
                        src={classes.image}
                        alt="class thumbnail"
                      />
                    </div>
                  </div>
                </td>
                <td>{classes.name}</td>
                <td>{classes.instructor}</td>
                <td className="text-center">{classes.available_seats}</td>
                <td className="">${classes.price}</td>
                <td>
                  <button
                    onClick={() => handleStatus(classes._id, "approve")}
                    className={`btn btn-success bg-[#04D912] normal-case ${
                      classes.status === "pending"
                        ? " "
                        : "btn-disabled bg-white"
                    }`}
                  >
                    Approve
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleStatus(classes._id, "deny")}
                    className={`btn btn-error bg-red-600 normal-case ${
                      classes.status === "pending"
                        ? " "
                        : "btn-disabled bg-white"
                    }`}
                  >
                    Deny
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/feedback/${classes._id}`}>
                    <button className="btn btn-info bg-blue-500 normal-case">
                      Feedback
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;

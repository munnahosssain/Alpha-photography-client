import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyClass = () => {
  const { user } = useAuth();
  const { data: student = [], refetch } = useQuery(["students"], async () => {
    const res = await fetch(
      `https://alpha-photography-server.vercel.app/students?email=${user?.email}`
    );
    return res.json();
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-base-200">
              <th>#</th>
              <th>Class Name</th>
              <th>Email</th>
              <th>Available</th>
              <th>Status</th>
              <th>Update</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {student.map((addStudent, index) => (
              <tr key={addStudent._id}>
                <th>{index + 1}</th>
                <td>{addStudent.name}</td>
                <td>{addStudent.email}</td>
                <td>{addStudent.available_seats}</td>
                <td>{addStudent.status}</td>
                <td>
                  <Link
                    to={`/dashboard/updateMyClass/${addStudent._id}`}
                    className="btn btn-xs"
                  >
                    Update
                  </Link>
                </td>
                <td>Feedback</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;

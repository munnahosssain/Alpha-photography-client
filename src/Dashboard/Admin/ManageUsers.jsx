import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAdmin from "../../hooks/useAdmin";

const ManageUsers = () => {
  const { data: students = [], refetch } = useQuery(["students"], async () => {
    const res = await fetch(
      "https://alpha-photography-server.vercel.app/students"
    );
    return res.json();
  });

  const handleInstructor= ()=>{}
  const handleAdmin= ()=>{}
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-base-200">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Instructor</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <th>{index + 1}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.role}</td>
                <td>
                  <button onClick={handleInstructor} className="btn btn-xs rounded-none bg-gray-500 text-white">
                    Instructor
                  </button>
                </td>
                <td>
                  <button onClick={handleAdmin} className="btn btn-xs rounded-none bg-red-500 text-white">
                    Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

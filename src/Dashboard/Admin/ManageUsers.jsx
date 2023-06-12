import { useQuery } from "@tanstack/react-query";
import React from "react";

const ManageUsers = () => {
  const { data: students = [], refetch } = useQuery(["students"], async () => {
    const res = await fetch("http://localhost:5000/students");
    return res.json();
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-base-200">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Instructor</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <th>{index+1}</th>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>instructor</td>
                <td>Admin</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

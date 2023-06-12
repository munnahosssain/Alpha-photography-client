import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";

const MyClass = () => {
  const { user } = useAuth();
  const { data: student = [], refetch } = useQuery(["students"], async () => {
    const res = await fetch(
      `http://localhost:5000/student?email=${user?.email}`
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
              <th>Name</th>
              <th>Email</th>
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
                <td>{addStudent.status}</td>
                <td>Update</td>
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

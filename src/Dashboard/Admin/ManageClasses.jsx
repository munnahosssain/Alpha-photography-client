import React from "react";
import useBookingClass from "../../hooks/useBookingClass";

const ManageClasses = () => {
  const [myClasses, isLoading, refetch] = useBookingClass();

  return (
    <div>
      <h1>ManageUsers</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Type</th>
              <th>Instructor</th>
              <th>Enrolled</th>
              <th>Roll</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((classes, index) => (
              <tr key={classes._id}>
                <th>{index + 1}</th>
                <td>{classes.name}</td>
                <td>{classes.instructor}</td>
                <td>{classes.students} Students</td>
                <td>Admin</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;

import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import useBookingClass from "../../hooks/useBookingClass";

const SelectedClass = () => {
  const [myClasses, isLoading, refetch] = useBookingClass();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://alpha-photography-server.vercel.app/myClasses/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Instructor</th>
            <th>Email</th>
            <th>Available Seat</th>
            <th>PAY</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myClasses.map((student, index) => (
            <tr key={student._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask w-12 h-12">
                      <img
                        src={student.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{student.instructor}</div>
                  </div>
                </div>
              </td>
              <td>{student.email}</td>
              <td>{student.available_seats}</td>
              <td>
                <Link to="/payment">Pay Now</Link>
              </td>
              <th>
                <button
                  onClick={() => handleDelete(student._id)}
                  className="btn-xs"
                >
                  <FaTrashAlt size={24} />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;

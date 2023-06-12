import React, { useContext, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCourse from "../../hooks/useCourse";
import useAuth from "../../hooks/useAuth";

const Class = ({ course }) => {
  const [availableSeats, setAvailableSeats] = useState(0);
  const { user } = useAuth();
  const { _id, name, image, instructor, available_seats, students, price } =
    course;

  const [, refetch] = useCourse();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCourse = () => {
    if (user && user?.email) {
      const classesItem = {
        classId: _id,
        name: name,
        image: image,
        instructor: instructor,
        available_seats: available_seats,
        students: students,
        price: price,
        email: user.email,
      };
      // console.log(classesItem);
      fetch("https://alpha-photography-server.vercel.app/myClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classesItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Item has been save",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Login first to order the food!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={course.image} alt="Photographer" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{course.name}</h2>
        <h2 className="font-semibold">Instructor: {course.instructor}</h2>
        <div className="flex justify-around">
          <p>{course.available_seats} Seat Available</p>
          <p className="ml-4"> ${course.price} Only</p>
        </div>
        <button
          onClick={() => handleAddToCourse(course)}
          className="btn rounded-bl-full"
        >
          Available seats
          <FaLocationArrow />
        </button>
      </div>
    </div>
  );
};

export default Class;

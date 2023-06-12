import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useBookingClass from "../../hooks/useBookingClass";

const AddAClass = () => {
  const { user } = useAuth();
  const [myClasses, isLoading, refetch] = useBookingClass();
  //   console.log(myClasses);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const instructors = {
      name: data.name,
      image: data.imageURL,
      instructor: data.instructor,
      available_seats: data.seats,
      price: data.price,
      email: data.email,
      status: (data.status = "pending"),
    };
    fetch("https://alpha-photography-server.vercel.app/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(instructors),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User SignUp successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <form
        className="lg:w-6/12 mx-auto bg-gray-400 rounded p-6 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6">Add a new class</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Class Name
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("name", { required: "Class Name is required" })}
            placeholder="Enter Class Name"
            type="text"
            id="name"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="image">
            Enter Image Link
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("imageURL", { required: "Email is required" })}
            placeholder="Enter Image URL"
            type="text"
            id="image"
          />
          {errors.imageURL && (
            <span className="text-red-500">{errors.imageURL.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="Available Seats">
            Available Seats
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("seats", { required: "Seat is required" })}
            placeholder="Enterer available seats"
            type="text"
            id="Available Seats"
          />
          {errors.seats && (
            <span className="text-red-500">{errors.seats.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="price">
            price
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("price", { required: "Price is required" })}
            placeholder="Price"
            type="text"
            id="price"
          />
          {errors.price && (
            <span className="text-red-500">{errors.price.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="instructor">
            Instructor Name
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("instructor", {
              required: "Instructor name is required",
            })}
            placeholder="Instructor Name"
            type="text"
            id="instructor"
            value={user?.displayName}
          />
          {errors.price && (
            <span className="text-red-500">{errors.instructor.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Instructor Email
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("email", { required: "Instructor email is required" })}
            placeholder="Instructor Email"
            type="email"
            id="email"
            value={user?.email}
          />
          {errors.price && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <button
          className="btn-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddAClass;

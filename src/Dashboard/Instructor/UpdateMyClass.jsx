import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateMyClass = () => {
  const { user } = useAuth();
  const data = useLoaderData();
  const {_id, available_seats, name, image, price } = data;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/classes/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update Your Data",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <form
      className="lg:w-6/12 mx-auto bg-gray-400 rounded p-6 shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-bold mb-6">Update class data</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          Class Name
        </label>
        <input
          className="border border-gray-300 px-4 py-2 w-full"
          {...register("name", { required: "Class Name is required" })}
          placeholder="Enter Class Name"
          defaultValue={name}
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
          defaultValue={image}
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
          defaultValue={available_seats}
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
          defaultValue={price}
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
  );
};

export default UpdateMyClass;

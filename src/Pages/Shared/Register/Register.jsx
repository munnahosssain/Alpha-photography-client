import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, userProfile } = useContext(AuthContext);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user.message);
        userProfile(data.name, data.photoUrl)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              photo: data.photoUrl,
              gender: data.gender,
              number: data.phoneNumber,
              address: data.address,
            };
            // console.log(saveUser);
            fetch("https://alpha-photography-server.vercel.app/students", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
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
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center mb-6">
      <form
        className="lg:w-6/12 bg-gray-400 rounded p-6 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-6">Registration</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("email", { required: "Email is required" })}
            type="email"
            id="email"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            id="password"
          />
          {errors.password?.type === "required" && (
            <span>Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span>Password must 6 characters or grater</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
            })}
            type="password"
            id="confirmPassword"
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="photoUrl">
            Photo URL
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("photoUrl")}
            type="text"
            id="photoUrl"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("gender")}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("phoneNumber")}
            type="tel"
            id="phoneNumber"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            className="border border-gray-300 px-4 py-2 w-full"
            {...register("address")}
            id="address"
          ></textarea>
        </div>
        <button
          className="btn-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Register
        </button>
        <br />
        <label className="text-white">
          Already have an account?
          <Link
            to="/login"
            className="text-white label-text-alt link link-hover font-bold text-xl"
          >
            {" "}
            Log in
          </Link>
        </label>
      </form>
    </div>
  );
};

export default Register;

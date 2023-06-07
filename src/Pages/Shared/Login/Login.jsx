import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import login from "../../../assets/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  console.log(errors);

  const handlegoogleSignIn = () => {
    googleSignIn()
    
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <img src={login} alt="login image" />
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
                {...register("password", { required: "Password is required" })}
                type="password"
                id="password"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn -mt-8">Login</button>
            </div>
            <label className="text-green-600">
              Don't have an account?
              <Link
                to="/register"
                className="text-xl text-green-600 label-text-alt link link-hover"
              >
                {" "}
                Sign up
              </Link>
            </label>
          </form>
          <button onClick={handlegoogleSignIn} className="btn w-full -mt-6">
            <FcGoogle size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

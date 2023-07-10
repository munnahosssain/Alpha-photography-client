import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import login from "../../../assets/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShow(!show);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(" ");
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        if (result) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login Successful!',
            showConfirmButton: false,
            timer: 1500
          })
        }
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
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
                placeholder="Enter Email"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex justify-center items-center relative">
                <input
                  className="border border-gray-300 px-4 py-2 w-full"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  type={show ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                />
                {show ? (
                  <BsEyeSlashFill
                    className="cursor-pointer right-3 absolute"
                    onClick={handleShowPassword}
                  />
                ) : (
                  <BsEyeFill
                    className="cursor-pointer  right-3 absolute"
                    onClick={handleShowPassword}
                  />
                )}
              </div>
              {errors.password?.type === "required" && (
                <span className="text-red-500">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  Password must 6 characters or grater
                </span>
              )}
            </div>

            <p className="text-warning -mt-4 mb-2">{error}</p>
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
          <button onClick={handleGoogleSignIn} className="btn w-full -mt-6">
            <FcGoogle size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

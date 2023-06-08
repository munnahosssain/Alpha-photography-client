import React from "react";
import { Link } from "react-router-dom";
import error from '../../../assets/images/error.png'

const Error = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {/* <img src={error} alt="" /> */}
          <h1>This is not the web page you are looking for.</h1>
          <Link to='/' className="btn btn-ghost border-none">Go to HomePage</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

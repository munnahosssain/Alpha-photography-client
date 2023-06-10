import React from "react";
import { Link } from "react-router-dom";

const GetShort = () => {
  return (
    <div className="shot">
      <div className="text-center">
        <h1 className="lg:text-6xl md:text-4xl text-orange-500 font-bold uppercase lg:inline-block">
          Getting <br /> learn Ready?
        </h1>
        <Link to="/classes" className="underline text-white tracking-wider">
           lets go
        </Link>
      </div>
    </div>
  );
};

export default GetShort;

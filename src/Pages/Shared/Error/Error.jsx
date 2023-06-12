import React from "react";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

const Error = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <Zoom right cascade>
            <h1 className="text-5xl">
              This is not the web page you are looking for.
            </h1>
          </Zoom>
          <Link to="/" className="btn btn-warning mt-6 border-none">
            Go to HomePage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

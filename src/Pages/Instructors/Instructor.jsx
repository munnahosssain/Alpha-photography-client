import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from 'react-icons/fa';

const Instructor = ({ instructor }) => {
  console.log(instructor);

  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3">
      {instructor?.map((ins) => (
        <div key={instructor._id} className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={ins.image} alt="Photographer" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{ins.name}</h2>
            <h2>{ins.email}</h2>
            <div className="flex justify-around">
              <p>{ins.number_of_classes} Classes taken</p>
              
              <p className="ml-4"> {parseInt(ins.classes_taken.length)} Classes taken</p>
            </div>
            <Link to="/instructorClasses" className="card-actions">
              <button className="btn rounded-bl-full">See Classes<FaLocationArrow/> </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;

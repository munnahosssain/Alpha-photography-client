import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const PopularInstructor = ({ popularInstructors }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 lg:mx-48 mx-auto p-4">
      {popularInstructors.map((popularInstructor) => (
        <div key={popularInstructor._id}>
          <div className="card w-full glass">
            <figure>
              <img src={popularInstructor.image} alt="instructor image" />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl card-title">{popularInstructor.name}</h2>
              <p className="text-xl">Enrolled Student: {popularInstructor.enrolled}</p>
              <p className="text-xl">
                Total Number of classes {popularInstructor.number_of_classes}
              </p>
              {/* <Link to="/" className="card-actions justify-end">
                <button className="btn rounded-bl-full">
                  Available seats
                  <FaLocationArrow />
                </button>
              </Link> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularInstructor;

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

const Class = ({ classes }) => {
  const [availableSeats, setAvailableSeats] = useState(0);

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3">
        {classes?.map((cls) => (
          <div key={cls._id} className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={cls.image} alt="Photographer" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cls.name}</h2>
              <h2 className="font-semibold">Instructor: {cls.instructor}</h2>
              <div className="flex justify-around">
                <p>{cls.available_seats} Seat Available</p>
                <p className="ml-4"> ${cls.price} Only</p>
              </div>

              <Link to="/availableSeats" className="card-actions">
                <button className="btn rounded-bl-full">
                  Available seats
                  <FaLocationArrow />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;

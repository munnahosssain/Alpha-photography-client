import React from "react";

const PopularClass = ({ popularClasses }) => {
  return (
    <div className="grid grid-cols-3 gap-12">
      {popularClasses?.map((popularClass) => (
        <div
          key={popularClass._id}
          className="card w-full bg-base-100 shadow-xl"
        >
          <figure className="px-10 pt-10">
            <img
              src={popularClass.image}
              alt="Photographer"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{popularClass.name}</h2>
            <h2 className="font-semibold">
              Instructor: {popularClass.instructor}
            </h2>
            <div className="flex justify-around">
              <p>{popularClass.students} of Students.</p>
              <p className="ml-4"> ${popularClass.price} Only.</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClass;

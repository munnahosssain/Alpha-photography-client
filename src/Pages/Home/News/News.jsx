import React from "react";

const News = ({ classesData }) => {
  return (
    <div className="m-24">
      <div className="text-center lg:px-64">
        <h1 className="text-4xl font-semibold">Latest News</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
          inventore dolorum rem tempore officiis officia doloremque repudiandae
          culpa quam nobis iusto alias similique amet optio, iste ipsam porro a
          eius quos illo magnam fuga minus quod. Numquam nisi laboriosam enim,
          vel, sed corporis totam aperiam facilis inventore sapiente reiciendis
          quam!
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {classesData.slice(0, 8).map((classData) => (
          <div
            key={classData._id}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img src={classData.image} alt="news thumbnail photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{classData.name}</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn-sm">View details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

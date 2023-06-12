import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const feedbackData = useLoaderData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://alpha-photography-server.vercel.app/feedback/${feedbackData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Feedback sent Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="text-center space-y-8 my-8 lg:my-16">
        <h2 className="font-semibold text-4xl">Send Feedback</h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body pb-4 grid justify-center items-center"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Feedback</span>
          </label>
          <textarea
            type="text"
            {...register("feedback", { required: true })}
            className="textarea textarea-bordered textarea-xl w-full max-w-full"
          ></textarea>
          {errors.feedback && (
            <span className="text-red-600">Feedback is required</span>
          )}
        </div>

        <div className="form-control mt-6">
          <input
            className="sports-button btn-wide btn-neutral p-4"
            type="submit"
            value="Send Feedback"
          />
        </div>
      </form>
    </div>
  );
};

export default Feedback;

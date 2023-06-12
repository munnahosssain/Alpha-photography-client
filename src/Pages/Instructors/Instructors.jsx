import axios from "axios";
import React, { useEffect, useState } from "react";
import Instructor from "./Instructor";

const Instructors = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://alpha-photography-server.vercel.app/instructors");
        setInstructor(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="lg:mx-24 my-6">
      <div className="mx-auto text-center lg:w-2/4">
        <h1 className="text-4xl font-semibold mb-2">All Instructors here</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          aspernatur reiciendis perferendis doloremque molestiae optio corrupti
          asperiores a quibusdam autem? aspernatur reiciendis perferendis
          doloremque.
        </p>
      </div>
      <Instructor instructor={instructor} />
    </div>
  );
};

export default Instructors;

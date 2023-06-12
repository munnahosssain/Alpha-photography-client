import React, { useEffect, useState } from "react";
import axios from "axios";
import PopularInstructor from "./PopularInstructor";
import Fade from 'react-reveal/Fade';

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://alpha-photography-server.vercel.app/homeInstructors"
        );
        setPopularInstructors(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="my-6">
      <Fade bottom cascade>
      <div className="mx-auto text-center lg:w-2/4 my-6">
        <h1 className="text-4xl font-semibold mb-2">Popular Instructors</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          aspernatur reiciendis perferendis doloremque molestiae optio corrupti
          asperiores a quibusdam autem? aspernatur reiciendis perferendis
          doloremque.
        </p>
      </div>
      </Fade>
      <PopularInstructor popularInstructors={popularInstructors} />
    </div>
  );
};

export default PopularInstructors;

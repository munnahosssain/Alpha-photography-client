import axios from "axios";
import React, { useEffect, useState } from "react";
import PopularClass from "./PopularClass";
import Fade from 'react-reveal/Fade';

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/popularClasses"
        );
        setPopularClasses(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="lg:mx-48 my-12 p-4">
       <Fade bottom cascade>
      <div className="mx-auto text-center lg:w-2/4">
        <h1 className="text-4xl font-semibold mb-2">Popular Classes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          aspernatur reiciendis perferendis doloremque molestiae optio corrupti
          asperiores a quibusdam autem? aspernatur reiciendis perferendis
          doloremque.
        </p>
      </div>
      </Fade>
      <Fade bottom>
      <PopularClass popularClasses={popularClasses} />
      </Fade>
    </div>
  );
};

export default PopularClasses;

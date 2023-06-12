import axios from "axios";
import React, { useEffect, useState } from "react";
import Class from "./Class";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://alpha-photography-server.vercel.app/classes?approve=true");
        setClasses(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="lg:mx-24 my-12">
      <div className="mx-auto text-center lg:w-2/4">
        <h1 className="text-4xl font-semibold mb-2">Available Classes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          aspernatur reiciendis perferendis doloremque molestiae optio corrupti
          asperiores a quibusdam autem? aspernatur reiciendis perferendis
          doloremque.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3">
        {classes.map((course) => (
          <Class key={course._id} course={course}></Class>
        ))}
      </div>
    </div>
  );
};

export default Classes;

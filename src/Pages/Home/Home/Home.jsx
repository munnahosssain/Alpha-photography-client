import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import GetShot from "../GetShot/GetShot";
import News from "../News/News";
import { useLoaderData } from "react-router-dom";
import Feedback from "../Feedback/Feedback";

const Home = () => {
  const classesData = useLoaderData();

  return (
    <div>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <News classesData={classesData} />
      <GetShot />
      <Feedback />
    </div>
  );
};

export default Home;

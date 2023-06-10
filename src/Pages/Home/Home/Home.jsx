import React from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import GetShot from "../GetShot/GetShot";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <GetShot />
    </div>
  );
};

export default Home;

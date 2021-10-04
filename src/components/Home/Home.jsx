import React from "react";
import Data from "./Data";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div className=" h-screen bg-green-200">
        <Hero />
      </div>
      <h1 className="flex justify-center align-center mt-16 text-5xl">
        Our Course
      </h1>
      <Data />
    </>
  );
};

export default Home;

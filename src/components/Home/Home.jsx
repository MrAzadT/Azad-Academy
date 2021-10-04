import React from "react";
import { Link } from "react-router-dom";
import Data from "./Data";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <div className=" h-screen bg-green-100">
        <Hero />
      </div>

      {/* -------------- */}
      <h1 className="text-center mt-16 text-5xl">
        Best Web Development Courses to Learn in 2021
      </h1>
      <p className="text-center text-3xl mt-4 ">My Top Recommendations </p>

      <div className="">
        <Data />
      </div>

      {/* -------------- */}
      <div className="text-center mt-6 mb-6 ">
        <Link
          to="/course"
          className=" p-3 text-white rounded-lg bg-indigo-400 hover:bg-indigo-600"
        >
          View All Course
        </Link>
      </div>
    </>
  );
};

export default Home;

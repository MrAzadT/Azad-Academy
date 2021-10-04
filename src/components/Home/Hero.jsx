import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center align-center">
      <div>
        <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-36 text-left">
          <div className="text-6xl text-gray-900 leading-none">
            Learn Programming
          </div>
          <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">
            “Programming isn’t about what you know; it’s about what you can
            figure out.”
          </div>
          <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
            Enroll My Course
          </button>
        </div>
      </div>

      <div className="flex justify-center align-center w-1/2">
        <img
          className="h-full w-full p-10 mr-20"
          src="https://res.cloudinary.com/abidazad/image/upload/v1633327045/development-4536630_owcfa6.svg"
          alt="svg img"
        />
      </div>
    </div>
  );
};

export default Hero;

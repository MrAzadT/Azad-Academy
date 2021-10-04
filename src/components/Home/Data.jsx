import React from "react";
import { useState } from "react";
import myData from "./../myData/myData";

const Data = () => {
  const [data, setData] = useState(myData);
  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-8">
        {data.map((item) => (
          <div className="rounded overflow-hidden bg-gray-200  shadow-lg">
            <img className="w-60 m-auto mt-4 " src={item.img} alt="Mountain" />
            <div className="px-6 py-4">
              <div className=" mt-2 font-bold text-2xl mb-2">{item.name}</div>
              <p className="text-gray-700  text-xl ">
                Instructor : {item.instructor}
              </p>
              <p className="text-xl mt-1">Rating : {item.rating}</p>
              <p className="text-xl mt-1">Price : $ {item.price}</p>
              <p className="text-xl mt-1">Experience Level : {item.level} </p>
            </div>
            <button className="h-10 w-32 ml-6 mb-4 text-white rounded-lg bg-indigo-400 hover:bg-indigo-600">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;

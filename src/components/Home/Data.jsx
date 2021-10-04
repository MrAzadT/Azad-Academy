import React from "react";
import { useState } from "react";
import myData from "./../myData/myData";

const Data = () => {
  const [data, setData] = useState(myData);
  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {data.map((item) => (
          <div className="rounded overflow-hidden bg-gray-200  shadow-lg">
            <img className="w-72 m-auto " src={item.img} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">
                Instructor : {item.instructor}
              </p>
              <p>Rating : {item.rating}</p>
              <p>Price : $ {item.price}</p>
              <p>Experience Level : {item.level} </p>
            </div>
            <button className="h-10 w-32 ml-6 mb-7 text-white rounded-lg bg-indigo-400 hover:bg-indigo-600">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;

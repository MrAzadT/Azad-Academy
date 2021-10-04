import React from "react";
import { useState } from "react";
import myData from "./../myData/myData";

const Data = () => {
  const [data, setData] = useState(myData);
  return (
    <div>
      <div className="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {data.map((item) => (
          <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={item.img} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">{item.instructor}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;

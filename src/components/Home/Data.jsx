import React from "react";
import { useState } from "react";
import myData from "./../myData/myData";

const Data = () => {
  const [data, setData] = useState(myData);
  return (
    <div>
      {data.map((data) => (
        <div>
          <img className="w-16" src={data.img} alt="" />
          <h1>{data.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Data;

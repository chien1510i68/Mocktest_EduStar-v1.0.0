import React from "react";

export default function LayoutItem2({ data }) {
  console.log("dataa0 , data", data);
  return (
    <div>
      {" "}
      <div className="w-full flex ">
        <div className=" w-1/2 h-[500px]  bg-red-500"> </div>
        <div className="w-1/2 h-[500px] bg-black"></div>
      </div>
    </div>
  );
}

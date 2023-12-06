import React from "react";

export default function LayoutItem1({ listItem }) {
  console.log("listItem", listItem);
  return (
    <div>
      {" "}
      <div className="w-full flex ">
        <div className=" w-1/2 h-[500px] bg-slate-200"> </div>
        <div className="w-1/2 h-[500px] bg-black"></div>
      </div>
    </div>
  );
}

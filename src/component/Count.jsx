import React, { useContext } from "react";
import Countdown from "react-countdown";
import { AppContext } from "./AppContext";

function Count({ time }) {
  const { data, dispatch } = useContext(AppContext);
  const renderer = ({ hours, minutes, seconds }) => {
    // console.log(hours , minutes , seconds);
    // localStorage.setItem("seconds",JSON.stringify(seconds))
    // localStorage.setItem("minutes",JSON.stringify(minutes))
    // localStorage.setItem("hours",JSON.stringify(hours))
    return (
      <div className="bg-orange-400 px-5 py-2 rounded-lg">
        <h1 className="font-medium text-lg text-yellow-50 ">  
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </h1>
      </div>
    );
  };
  const handleComplete = () => {
    dispatch({ type: "openModalNextSection" });
    // notification.success({message : "Thanh cong"})
  };

  return (
    <div>
      <Countdown
        className="mr-5"
        date={Date.now() + time *60 * 1000}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default Count;

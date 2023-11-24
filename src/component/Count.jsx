import React, { useContext } from "react";
import Countdown from "react-countdown";
import { AppContext } from "./AppContext";

function Count({ time }) {
  const { data, dispatch } = useContext(AppContext);
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <div>
        <h1 className="font-medium text-lg text-orange-500">
          Thời gian còn lại : {hours.toString().padStart(2, "0")}:
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
        date={Date.now() + 3 * 1000}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default Count;

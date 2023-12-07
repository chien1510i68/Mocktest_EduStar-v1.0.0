import React, { useContext, useEffect, useState } from "react";
import Countdown from "react-countdown";
import { AppContext } from "./AppContext";
import { Button } from "antd";

function Count({ time }) {
  const { data, dispatch } = useContext(AppContext);
  const initialTime = time * 60;
  const previousTimeLeft = localStorage.getItem("timeLeft");
  const [timeLeft, setTimeLeft] = useState(
    previousTimeLeft ? parseInt(previousTimeLeft) : initialTime
  );
  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
        localStorage.setItem("timeLeft", timeLeft - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  // Xóa trạng thái trong Local Storage sau khi sử dụng
  useEffect(() => {
    if (previousTimeLeft) {
      localStorage.removeItem("timeLeft");
    }
   
  }, []);
  useEffect(() =>{
    const timeInSection = JSON.parse(localStorage.getItem("timeSection"))
    handleChangeTime(timeInSection)
  } ,[localStorage.getItem("timeSection")])
  const renderer = ({ hours, minutes, seconds }) => {
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
  const handleChangeTime = (x) =>{
    const newTimeLeft = x * 60; // 80 phút
    setTimeLeft(newTimeLeft);
    localStorage.setItem("timeLeft", newTimeLeft);
  }
 
  return (
    
    <div>
      {/* <Button onClick={handleChangeTime }>Change time </Button> */}
      <Countdown
        className="mr-5"
        date={Date.now() + timeLeft * 1000}
        renderer={renderer}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default Count;

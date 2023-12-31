import React, { useContext, useEffect, useState } from "react";
import Countdown from "react-countdown";
import { AppContext } from "./AppContext";
import { Button } from "antd";

function Count({ time }) {
  const { data, dispatch } = useContext(AppContext);
  let initialTime = JSON.parse(localStorage.getItem("timeSection")) * 60;
  const { setChangeTimeSection } = data;

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

  useEffect(() => {
    if (previousTimeLeft) {
      localStorage.removeItem("timeLeft");
    }
   
  }, []);
  useEffect(() =>{
    if(setChangeTimeSection === true){
      
      const newTimeLeft = JSON.parse(localStorage.getItem("timeSection")) * 60; // 80 phút
      setTimeLeft(newTimeLeft);
      localStorage.setItem("timeLeft", newTimeLeft);
      dispatch({type : "setChangeTimeSection" , payload : false})
    }
  } ,[setChangeTimeSection])
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
      {/* <Button onClick={()=>handleChangeTime(10) }>Change time </Button> */}
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

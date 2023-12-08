import { Button } from "antd";
import React, { useContext, useEffect, useState } from "react";
import Count2 from "../component/Count2";
import { AppContext } from "../component/AppContext";

function Test(props) {
  const {data , dispatch} = useContext(AppContext)
  const [timeSection, setTimeSection] = useState(null);
  const [resetTime, setResetTime] = useState(false);

  useEffect(() => {
    setTimeSection(JSON.parse(localStorage.getItem("timeSection")));
    setResetTime(false);
  }, []);

  const handleChangeType = (time) => {
    localStorage.setItem("timeSection", JSON.stringify(time));
    dispatch({type : "setChangeTimeSection" , payload : true})
  };

  return (
    <div>
      <Count2 />
      <Button onClick={() => handleChangeType(45)}>Listening</Button>
      <Button onClick={() => handleChangeType(30)}>Reading</Button>
    </div>
  );
}

export default Test;
